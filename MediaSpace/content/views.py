from rest_framework import generics

from . import models
from . import serializers

from rest_framework.decorators import api_view

from rest_framework import filters
from rest_framework.pagination import PageNumberPagination


class GenreList(generics.ListAPIView):
    """ Lists all genres. """
    queryset = models.Genre.objects.all()
    serializer_class = serializers.GenreSerializer


class GenreDetail(generics.RetrieveUpdateDestroyAPIView):
    """ Get info for a given genre_id. """
    queryset = models.Genre.objects.all()
    serializer_class = serializers.GenreSerializer


class GenreCreate(generics.CreateAPIView):
    """ Create a new genre. """
    queryset = models.Genre.objects.all()
    serializer_class = serializers.GenreSerializer


class MovieList(generics.ListAPIView):
    """ Lists all movies. """
    queryset = models.Movie.objects.all()
    serializer_class = serializers.MovieSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['title']


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
    paginator = PageNumberPagination()
    paginator.page_size = 20

    ratings = models.Rating.objects.filter(movie__exact=pk)
    result_page = paginator.paginate_queryset(ratings, request)

    ser = serializers.RatingSerializer(result_page, many=True)

    return paginator.get_paginated_response(ser.data)


@api_view()
def get_comments_per_movie(request, pk):
    """ Returns all comments for a given movie_id. """
    paginator = PageNumberPagination()
    paginator.page_size = 50

    ratings = models.Rating.objects.filter(movie__exact=pk).exclude(comment__exact="")
    result_page = paginator.paginate_queryset(ratings, request)
    ser = serializers.CommentSerializer(result_page, many=True)

    return paginator.get_paginated_response(ser.data)


@api_view()
def get_movies_per_genre(request, pk):
    """ Returns all movies for a given genre_id. """
    paginator = PageNumberPagination()
    paginator.page_size = 20

    movies = models.Movie.objects.filter(genre__exact=pk)
    result_page = paginator.paginate_queryset(movies, request)
    ser = serializers.MovieSerializer(result_page, many=True)

    return paginator.get_paginated_response(ser.data)


@api_view()
def recommend_random(request):
    import random
    """ Returns 10 movies randomly. """
    paginator = PageNumberPagination()
    paginator.page_size = 20

    count = models.Movie.objects.count()
    rnd = random.randint(0, count-1)
    movies = models.Movie.objects.all()[rnd:rnd+10]

    result_page = paginator.paginate_queryset(movies, request)
    ser = serializers.MovieSerializer(result_page, many=True)

    return paginator.get_paginated_response(ser.data)

