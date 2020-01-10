from django.urls import include, path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('movie', views.MovieList.as_view()),
    path('movie/<int:pk>', views.MovieDetail.as_view()),
    path('movie/create', views.MovieCreate.as_view()),
    path('rating', views.RatingList.as_view()),
    path('rating/<int:pk>', views.RatingDetail.as_view()),
    path('rating/create', views.RatingCreate.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)