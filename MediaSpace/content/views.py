from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from . import models
from . import serializers


class MovieList(generics.ListAPIView):
    queryset = models.Movie.objects.all()
    serializer_class = serializers.UserSerializer
