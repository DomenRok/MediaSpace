import pandas as pd
from .models import CustomUser, Movie, Rating


class DataUtils:
    @staticmethod
    def create_matrix():
        pass

    @staticmethod
    def return_dataframe(n=1000):
        df = pd.DataFrame(columns=["user_id", "movie_id", "rating"])
        for row in Rating.objects.raw('SELECT * from content_rating group by movie_id having count(*) > {}'.format(n)):
            df = df.append({"user_id": row.person_id, "movie_id": row.movie_id, "rating": row.rating}, ignore_index=True)
        return df


