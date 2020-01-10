import numpy as np
import pandas as pd
import math

class SlopOnePredictor:
    #def __init__(self):


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
            #df.loc[x] = pd.Series(self.uim.movies, index=self.uim.movies).map(b).to_list()
            self.df[x] = self.df.index.map(b).to_list()
        self.df = self.df.T


    def predict(self, user_id):
        unknown = self.df.loc[user_id].loc[self.df.loc[user_id].isna()].index.to_list()#.columns[self.df.isna().any()].tolist()
        #test = self.df.loc[user_id]
        known = self.df.loc[user_id].loc[self.df.loc[user_id].notnull()].index.to_list()
        header = ["movieID", "rating"]
        matrix = np.ones((len(unknown), len(header)))
        self.rez = pd.DataFrame(matrix, columns=header)
        self.rez["movieID"] = unknown
        self.rez.set_index("movieID", inplace=True)
        for x in unknown:
            scores = []
            for y in known:
                test = self.df[self.df[x].notnull() & self.df[y].notnull()]
                a = self.df.loc[user_id][y] + test[x] - test[y]
                scores += a.to_list()
            self.rez.loc[x] = np.mean(scores)
        return self.rez.to_dict()["rating"]