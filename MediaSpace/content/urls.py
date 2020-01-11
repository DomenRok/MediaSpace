from django.urls import include, path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('movie', csrf_exempt(views.MovieList.as_view())),
    path('movie/<int:pk>', csrf_exempt(views.MovieDetail.as_view())),
    path('movie/create', csrf_exempt(views.MovieCreate.as_view())),
    path('movie/rating/<int:pk>', csrf_exempt(views.get_ratings_per_movie)),
    path('movie/comment/<int:pk>', csrf_exempt(views.get_comments_per_movie)),
    path('rating', csrf_exempt(views.RatingList.as_view())),
    path('rating/<int:pk>', csrf_exempt(views.RatingDetail.as_view())),
    path('rating/create', csrf_exempt(views.RatingCreate.as_view())),
    ]

urlpatterns = format_suffix_patterns(urlpatterns)