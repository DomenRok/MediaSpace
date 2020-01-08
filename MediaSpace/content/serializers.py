# users/serializers.py
from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Movie
        fields = ('title', 'description', 'link')
