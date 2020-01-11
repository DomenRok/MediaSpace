from rest_framework import generics

from . import models
from . import serializers

from rest_framework.decorators import api_view
from rest_framework.response import Response


from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class MovieList(generics.ListAPIView):
    """ Lists all movies """
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    """ View movie details for given movie_id. """
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class MovieCreate(generics.CreateAPIView):
    """ Create a new movie. """
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer


class RatingList(generics.ListAPIView):
    """ Lists all ratings. """
    queryset = models.Rating.objects.all()
    serializer_class = serializers.CommentRatingSerializer


class RatingDetail(generics.RetrieveUpdateDestroyAPIView):
    """ Lists rating for a given rating_id. """

    queryset = models.Rating.objects.all()
    serializer_class = serializers.CommentRatingSerializer


class RatingCreate(generics.CreateAPIView):
    """ Create a new rating. """

    queryset = models.Rating.objects.all()
    serializer_class = serializers.CommentRatingSerializer


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """ Displays Comments for a given movie id"""

    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieWithCommentsSerializer


@api_view()
def get_ratings_per_movie(request, pk):
    """ Returns all ratings for a given movie_id"""
    ratings = models.Rating.objects.filter(movie__exact=pk)
    Ser = serializers.RatingSerializer(ratings, many=True)

    return Response(Ser.data)


@api_view()
def get_comments_per_movie(request, pk):
    """ Returns all comments for a given movie_id. """
    ratings = models.Rating.objects.filter(movie__exact=pk).exclude(comment__exact="")
    Ser = serializers.CommentSerializer(ratings, many=True)

    return Response(Ser.data)


