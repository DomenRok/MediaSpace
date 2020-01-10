import numpy as np
import pandas as pd
import math

class CosinePredictor:
    def __init__(self, min_values=0, threshold=0):
        self.threshold = threshold
        self.min_values = min_values

    def fit(self, X):
        self.uim = X
        header = ["userID"] + self.uim.movies

        groups = self.uim.data.groupby("userID")
        matrix = np.ones((len(self.uim.users), len(header))) * np.nan
        self.df = pd.DataFrame(matrix, columns=header)
        self.df["userID"] = self.uim.users
        self.df.set_index("userID", inplace=True)
        self.df = self.df.T
        for x in self.uim.users:
            b = groups.get_group(x)[["movieID", "rating"]].set_index('movieID').to_dict()['rating']
            # df.loc[x] = pd.Series(self.uim.movies, index=self.uim.movies).map(b).to_list()
            self.df[x] = self.df.index.map(b).to_list()
        self.df = self.df.T

        header = ["movieID"] + self.uim.movies
        m = np.ones((len(header) - 1, len(header))) * np.nan

        self.similarityMatrix = pd.DataFrame(m, columns=header)
        self.similarityMatrix["movieID"] = self.uim.movies
        self.similarityMatrix.set_index("movieID", inplace=True)

        arr = self.uim.movies[:]
        for x in self.uim.movies:
            arr.remove(x)
            #self.similarityMatrix.apply(lambda y: [self.similarity(x, z) for z in y])
            for y in arr:
                self.similarityMatrix.loc[x][y] = self.similarity(x, y)
                self.similarityMatrix.loc[y][x] = self.similarityMatrix.loc[x][y]

    def similarity(self, p1, p2):
        t = self.df[[p1, p2]].dropna()#.head(5)
        if t.shape[0] < self.min_values:
            return 0
        lst = t.index.values.tolist()
        userAvg = self.df.loc[lst, :].T.apply(lambda x: x.mean())

        a = ((t[p1] - userAvg) * (t[p2] - userAvg)).sum()
        b = ((t[p1] - userAvg) ** 2).sum()
        c = ((t[p2] - userAvg) ** 2).sum()

        d = math.sqrt(b) * math.sqrt(c)

        rez = a/d
        if rez < self.threshold:
            return 0

        return rez

    def similarItems(self, item, n):
        return self.similarityMatrix[item].sort_values(ascending=False).head(n).to_dict()


    def predict(self, user_id):
        unknown = self.df.loc[user_id].loc[self.df.loc[user_id].isna()].index.tolist()
        known = self.df.loc[user_id].loc[self.df.loc[user_id].notnull()].index.tolist()
        knownS = self.df.loc[user_id].loc[self.df.loc[user_id].notnull()]
        header = ["movieID", "rating"]
        matrix = np.ones((len(unknown), len(header)))
        self.rez = pd.DataFrame(matrix, columns=header)
        self.rez["movieID"] = unknown
        self.rez.set_index("movieID", inplace=True)

        movieAvg = self.df.T.loc[known, :].T.apply(lambda x: x.mean())
        #movieAvg.apply(lambda x: x.mean())
        movieAvg = knownS - movieAvg

        for x in unknown:
            a = (self.similarityMatrix[x].dropna() * movieAvg).sum()
            b = self.similarityMatrix[x].dropna().sum()
            self.rez.loc[x] = a/b#self.df[x].mean() + (a / b)

        return self.rez.to_dict()["rating"]