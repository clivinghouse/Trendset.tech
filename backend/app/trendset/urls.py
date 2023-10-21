from django.urls import path
from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [
    path("hello/", views.index, name="index"),
    path("sign_up/", views.sign_up, name="index"),
    path("", views.home, name="home")
]