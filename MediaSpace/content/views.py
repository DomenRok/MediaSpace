from rest_framework import generics

from . import models
from . import serializers

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class MovieList(generics.ListAPIView):
    #authentication_classes = [SessionAuthentication, BasicAuthentication]
    #permission_classes = [IsAuthenticated]

    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieCreate(generics.CreateAPIView):
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer
