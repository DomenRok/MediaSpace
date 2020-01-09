# api/urls.py
from django.urls import include, path

urlpatterns = [
    path('users/', include('users.urls')),
    path('content/', include('content.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]