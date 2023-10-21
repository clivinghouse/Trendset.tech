from pymongo import MongoClient
def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb+srv://clivinghouse:Mason121302!!@trendset.plb5zxd.mongodb.net/"
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
   
   # Create the database for our example (we will use the same database throughout the tutorial
   return client
  
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
   # Get the database
   client = get_database()
   db = client["trendset"]
   testDict = {
      "name":"test"
   }

   col = db["test"]
   x = col.insert_one(testDict)
   print(x)
   query = {"name":"test"}
   x = col.find(query)
   for xs in x:
      print(xs)