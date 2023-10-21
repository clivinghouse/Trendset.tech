from django.shortcuts import render
from trendset.Helpers.dbHelperclass import dbHelper


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
    ''' 
    firebase_id = 1
    
    helper = dbHelper()
    helper.addUser(firebase_id, fname, lname, email)
    '''
    
    data = fname + lname + email + password
    print("Name:", data)
    return render(request, "sign_up.html")