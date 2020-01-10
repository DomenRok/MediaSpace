# users/serializers.py
from rest_framework import serializers
from . import models


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Movie
        fields = ('title', 'description', 'link', 'id', 'genre', 'imdb_id', 'thumbnail_url')


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rating
        fields = ('comment', 'rating', 'person', 'movie', 'date_rated')

