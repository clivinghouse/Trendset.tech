from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def home(request):
    return HttpResponse("Home")

def sign_up(request):
    data = request.POST.get("name")
    print(data)
    return render(request, "sign_up.html")