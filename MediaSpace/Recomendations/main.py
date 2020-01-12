from recomendations import Recommend, SlopOne_Predictor, Cosine_Predictor
from content.services import DataUtils
import random
import MySQLdb as mysql



class RecomendationService:
    def favouriteMovies(self, user):

        df = DataUtils.return_dataframe()
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
        for idmovie in rec_items.keys():
            print(idmovie)
            query = ("INSERT INTO content_recommendation(movie_id, person_id) VALUES (%s, %s)")
            cursor.execute(query, (user, rec_items[idmovie]))

        mydb.commit()
        cursor.close()
        mydb.close()

RecomendationService().favouriteMovies(71535)







