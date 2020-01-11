from rest_framework import generics

from . import models
from . import serializers

from django.db.models import Q

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class MovieList(generics.ListAPIView):
    """ Lists all movies """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    """ View movie details for given movie_id. """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieCreate(generics.CreateAPIView):
    """ Create a new movie. """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class RatingList(generics.ListAPIView):
    """ Lists all ratings. """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Rating.objects.all()
    serializer_class = serializers.RatingSerializer


class RatingDetail(generics.RetrieveUpdateDestroyAPIView):
    """ Lists rating for a given rating_id. """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Rating.objects.all()
    serializer_class = serializers.RatingSerializer


class RatingCreate(generics.CreateAPIView):
    """ Create a new rating. """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Rating.objects.all()
    serializer_class = serializers.RatingSerializer


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """ Displays Comments for a given movie id"""
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieWithCommentsSerializer
