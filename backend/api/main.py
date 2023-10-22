from flask import Flask
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
    



@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"