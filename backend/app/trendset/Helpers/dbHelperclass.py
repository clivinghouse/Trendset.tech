import pymongo

class dbHelper:
    client = {}
    def __init__(self,dbConnectionString, database):
        self.client = pymongo.MongoClient(dbConnectionString)[database]

    def getUser(self, id):
        
        col = self.client["users"]
        ret = col.find_one({
            "firebase_id":id
        })
        return ret
    
    def addUser(self,firebase_id,f_name,l_name,email):
        results = self.getUser(firebase_id)

        if results is None:
            col = self.client["users"]
            newUser = {
                "firebase_id":firebase_id,
                "f_name":f_name,
                "l_name":l_name
            }
            col.insert_one(newUser)
            return newUser
                 
        else:
            
            return None
    
        
    
    