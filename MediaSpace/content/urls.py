from django.urls import include, path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('', views.MovieList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)