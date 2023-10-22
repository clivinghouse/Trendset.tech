from flask import Flask, request
from markupsafe import escape
from Helpers.dbHelperclass import dbHelper as dbh
from bson import json_util

app = Flask(__name__)
conn = dbh("mongodb+srv://trendset:FIfRuK42erNOir02@trendset.plb5zxd.mongodb.net","trendset")

@app.route("/api/getUser/<email>")
def getUser(email):
    connResp = conn.getUser(email)
    if connResp is None:
        return("null")
    else:
        return json_util.dumps(connResp)
    
@app.route("/api/addUser/<user>")
def addUser(user):
    response = request.data
    new_user = conn.addUser(response)
    
        
    return json_util.dumps(new_user)

@app.route("/api/getUniqueProd/<id>")
def getUniqueProd(id):
    connResp = conn.getUser(id)
    if connResp is None:
        return("null")
    else:
        return json_util.dumps(connResp)
    
@app.route("/api/addProduct/<email><product>")
def addProduct(email, product):
    response = request.data
    email = response
    new_prod = conn.addProduct(email, product)
    return new_prod

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"