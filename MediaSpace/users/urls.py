from django.urls import include, path

from . import views
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('', views.UserList.as_view()),
    path('<int:pk>/', views.UserDetail.as_view()),
    path('login', views.login),
    path('logout', views.logout)
]

urlpatterns = format_suffix_patterns(urlpatterns)