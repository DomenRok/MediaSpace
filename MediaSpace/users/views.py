# users/views.py
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from . import models
from . import serializers


class UserList(generics.ListAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

a = '''
class UserList(APIView):
    def get(self, request, format=None):
        users = models.CustomUser.objects.all()
        serializer = serializers.UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = serializers.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return models.CustomUser.objects.get(pk=pk)
        except models.CustomUser.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        CustomUser = self.get_object(pk)
        serializer = serializers.UserSerializer(CustomUser)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        CustomUser = self.get_object(pk)
        serializer = serializers.UserSerializer(CustomUser, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        CustomUser = self.get_object(pk)
        CustomUser.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''