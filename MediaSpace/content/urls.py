from django.urls import include, path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('', views.MovieList.as_view()),
    path('<int:pk>', views.MovieDetail.as_view()),
    path('create/', views.MovieCreate.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)