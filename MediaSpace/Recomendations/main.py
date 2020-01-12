from Recomendations import Recommend, SlopOne_Predictor, Cosine_Predictor
from content.services import DataUtils
import random
import MySQLdb as mysql



class RecomendationService:
    def favouriteMovies(self, user):

        df = DataUtils.return_dataframe(1000)
        print("Vrnena matrika")
        uid = Recommend.UserItemData(df, 1000)
        print("Matrix read")
        preds = [SlopOne_Predictor.SlopOnePredictor]#, Cosine_Predictor.CosinePredictor]
        pred = random.choice(preds)()
        rec = Recommend.Recommender(pred)
        rec.fit(uid)
        print("Fit completed")
        rec_items = rec.recommend(user, 50, False)
        print("recommendation given")

        mydb = mysql.connect(
            host="86.61.77.35",
            user="tguda",
            passwd="0xoEb0*&rBmH",
            db='MediaSpace'
        )

        cursor = mydb.cursor()
        query = ("DELETE FROM content_recommendation WHERE person_id = {}".format(user))
        cursor.execute(query)
        mydb.commit()

        for idmovie in rec_items.keys():
            query = ("INSERT INTO content_recommendation(movie_id, person_id) VALUES (%s, %s)")
            cursor.execute(query, (idmovie, user))

        mydb.commit()
        cursor.close()
        mydb.close()

    def similarMoviesFillAll(self):
        df = DataUtils.return_dataframe(1000)
        print("Vrnena matrika")
        uid = Recommend.UserItemData(df, 1000)
        print("Matrix read")
        cosine = Cosine_Predictor.CosinePredictor()
        cosine.fit(uid)
        print("fit")
        matrika = cosine.similarityMatrix

        mydb = mysql.connect(
            host="86.61.77.35",
            user="tguda",
            passwd="0xoEb0*&rBmH",
            db='MediaSpace'
        )

        cursor = mydb.cursor()

        similarMovies = matrika.stack().sort_values(ascending=False).reset_index()
        similarMovies.columns = ["movieID_1", "movieID_2", "similarity"]
        sim = similarMovies.groupby("movieID_1")
        for i, group in sim:
            print(i)
            query = ("DELETE FROM content_similarity WHERE movie_from_id = {}".format(i))
            cursor.execute(query)
            mydb.commit()
            similar = group.head(10)
            for _, y in similar.iterrows():
                query = ("INSERT INTO content_similarity(similarity, movie_from_id, movie_to_id) VALUES (%s, %s, %s)")
                cursor.execute(query, (y["similarity"], i, y["movieID_2"]))

            mydb.commit()

        cursor.close()
        mydb.close()








RecomendationService().favouriteMovies(71535)
#RecomendationService().similarMoviesFillAll()







