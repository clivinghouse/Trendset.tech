from flask import Flask, request
from Helpers.dbHelperclass import dbHelper as dbh
from bson import json_util
import os
import json




session_key = os.urandom(24).hex()

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
    
@app.route("/api/addProduct/<email>",methods=['POST'])
def addProduct(email):
    response = request.data
    jstring =  response.decode('utf8').replace("'", '"')
    data = json.loads(jstring)
    conn.addProduct(email, data)
    return (data)  
#    return json_util.dumps(new_prod)


@app.route("/api/removeProduct/<id>")
def removeProduct(id):
    return conn.removeProduct(id)

@app.route("/api/updaeProduct/<id>")
def updateProduct(id, product):
    product = request.get_json()
    
    return conn.updateProduct(id, product)

@app.route("/api/getAllForUser/<email>")
def getAllForUser(email):
    result = conn.getAllForUser(email)
    return result
    


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"