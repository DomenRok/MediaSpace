# users/views.py
from rest_framework import generics

from . import models
from . import serializers

from users.models import CustomUser

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response


class UserList(generics.ListAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'username': user.username, 'user_id': user.id},
                    status=HTTP_200_OK)

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def logout(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                            status=HTTP_404_NOT_FOUND)
    if user:
        try:
            token = Token.objects.get(user_id=user.id)
            token.delete()
        except Token.DoesNotExist:
            return Response({'error': 'You are already logged out.'},
                            status=HTTP_404_NOT_FOUND)
    return Response()




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