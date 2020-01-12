from content.models import *
import requests

movies = Movie.objects.all()


api_key = "d4c97f145fc1ddde8e851ee7dcd26d2d"
api_url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&append_to_response=videos"
youtube_url = "https://www.youtube.com/watch?v={}"


for ind, movie in enumerate(movies):
    if movie.link:
        continue
    mov_id = str(movie.imdb_id)
    if len(mov_id) != 7:
        mov_id = mov_id.zfill(7)

    request_url = api_url.format(mov_id, api_key)

    response = requests.request('GET', request_url)
    try:
        youtube_key = response.json().get('videos', None)['results'][0]['key']
    except:
        continue
    new_link = youtube_url.format(youtube_key)
    print(new_link)
    movie.link = new_link
    movie.save()
