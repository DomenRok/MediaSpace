import pandas as pd
from .models import CustomUser, Movie, Rating


class RecomendationService:
    @staticmethod
    def create_matrix():
        pass

    @staticmethod
    def return_dataframe():
        df = pd.DataFrame(columns=["user_id", "movie_id", "rating"])
        for row in Rating.objects.all():
            df = df.append({"user_id": row.person_id, "movie_id": row.movie_id, "rating": row.rating}, ignore_index=True)
        return df


