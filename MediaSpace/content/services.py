import pandas as pd
from .models import CustomUser, Movie, Rating


class DataUtils:
    @staticmethod
    def create_matrix():
        pass

    @staticmethod
    def return_dataframe(n=1000):
        movies = []
        for row in Rating.objects.raw('SELECT * from content_rating group by movie_id having count(*) > {}'.format(n)):
            movies.append(row.movie_id)

        df = pd.DataFrame(list(Rating.objects.filter(movie__in=movies).values("person_id", "movie_id", "rating")))
        df.columns = ["movieID", "userID", "rating"]

        #for row in Rating.objects.filter(movie__in=movies):
        #    if(row.movie_id not in done):
        #        done.append(row.movie_id)
        #        i += 1
        #        print(i)
        #    df = df.append({"user_id": row.person_id, "movie_id": row.movie_id, "rating": row.rating}, ignore_index=True)
        return df


