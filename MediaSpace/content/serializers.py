# users/serializers.py
from rest_framework import serializers
from . import models


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rating
        fields = ('comment', 'rating', 'person', 'movie', 'date_rated')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rating
        fields = ('comment', 'person')


class MovieWithCommentsSerializer(serializers.ModelSerializer):
    """ Serializes movies with respect to their reverse_set """

    ratings = CommentSerializer(many=True, read_only=True, source="rating_set")

    class Meta:
        model = models.Movie
        fields = ('title', 'description', 'link', 'id', 'genre', 'imdb_id', 'thumbnail_url', 'ratings')


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Movie
        fields = ('title', 'description', 'link', 'id', 'genre', 'imdb_id', 'thumbnail_url')

