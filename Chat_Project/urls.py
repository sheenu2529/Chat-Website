"""
URL configuration for Chat_Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from Chat_app.views import create_room
from Chat_app import views
from Chat_app.views import MessageListCreate, MessageDetail, RoomView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("Chat_app.urls")),
    path("room/", RoomView.as_view(), name="room"),
    path("create-room/<uuid:uuid>/", create_room, name="create_room"),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/signin/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/auth/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("messages/", MessageListCreate.as_view(), name="message-list-create"),
    path("messages/<int:pk>/", MessageDetail.as_view(), name="message-detail"),
]
