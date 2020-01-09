from Recomendations import Recommend, SlopOne_Predictor, Cosine_Predictor
import random

def favouriteMovies(user, df):
    uid = Recommend.UserItemData(df, 1000)
    preds = [SlopOne_Predictor.SlopOnePredictor, Cosine_Predictor.CosinePredictor]
    pred = random.choice(preds)()
    rec = Recommend.Recommender(pred)
    rec.fit(uid)
    rec_items = rec.recommend(user, 50, False)

    return rec_items.keys()