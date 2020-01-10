import numpy as np
import pandas as pd
import math

class UserItemData:
    def __init__(self, data, min_ratings = None):
        self.data = data

        if min_ratings:
            self.data = self.data[self.data.groupby('movieID')['movieID'].transform('size') > min_ratings]

        self.movies = self.data["movieID"].drop_duplicates().to_list()
        self.users = self.data["userID"].drop_duplicates().to_list()

    def nrows(self):
        return self.data.shape[0]

class MovieData:
    def __init__(self, path):
        self.data = pd.read_csv(path, sep="\t", encoding = "ISO-8859-1")

    def get_title(self, id):
        #value = self.data[self.data["id"] == id]["title"].to_list()[0]
        return self.data[self.data["id"] == id]["title"].to_list()[0]

class Recommender:
    def __init__(self, X):
        self.X = X

    def fit(self, x):
        self.X.fit(x)

    def recommend(self, userID, n=10, rec_seen=True):
        self.recomended = self.X.predict(userID)
        self.recomended = pd.DataFrame(list(self.recomended.items()), columns=["movieID", "rating"])#from_dict(self.recomended, orient='index', columns=["movieID", "rating"])
        self.recomended.sort_values(by=["rating"], inplace=True, ascending=False)

        if not rec_seen:
            drop = self.X.uim.data.groupby("userID").get_group(userID)["movieID"].to_list()
            self.recomended = self.recomended[~self.recomended.isin(drop)].dropna()

        return self.recomended.head(n).set_index('movieID').to_dict()['rating']