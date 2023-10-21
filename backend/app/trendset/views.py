from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def home(request):
    return HttpResponse("Home")

def sign_up(request):
    fname = request.POST.get("fname")
    lname = request.POST.get("lname")
    email = request.POST.get("email")
    password = request.POST.get("pass")
    
    data = fname + lname + email +  password
    print("Name:", data)
    return render(request, "sign_up.html")