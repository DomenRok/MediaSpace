from rest_framework import generics

from . import models
from . import serializers


class MovieList(generics.ListAPIView):
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer
