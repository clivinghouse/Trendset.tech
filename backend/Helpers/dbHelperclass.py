import pymongo

class dbHelper:
    client = {}
    def __init__(self,dbConnectionString, database):
        self.client = pymongo.MongoClient(dbConnectionString)[database]

    def getUser(self, email):
        
        col = self.client["users"]
        ret = col.find_one({
            "email":email
        })
        return ret
    
    def addUser(self,user):
        results = self.getUser(user['email'])

        if results is None:
            col = self.client["users"]
            
            col.insert_one(user)
            return user
                 
        else:
            
            return None
    def getUniqueProduct(self,id):
        col = self.client['products']
        prods = col.find_one({
            "product.id":id
        })
        return prods
    def biggestVal(self):
        col = self.client['products']
        prods = col.find({},{'product.id':1})
        largest = 0
        for num in prods:
            if num['product']['id'] > largest:
                largest = num['product']['id']
        return largest
    def addProduct(self,email,product):
        biggestVal = self.biggestVal()
        product.update({"id":biggestVal+1})
        col = self.client["products"]
        fCol = col.find_one({"email":email})
        ret = col.insert_one({
                "email":email,
                "product":product
            })
        return ret
    def removeProduct(self,id):
        object = self.getUniqueProduct(id)
        col = self.client['products']
        rem = col.delete_many({'product.id':id})
        print(rem)
        return object
    def updateProduct(self,id,product):
        col = self.client['products']
        myquery = { "product.id": id }
        newvalues = { "$set": product }
        col.update_many(myquery, newvalues)
        return self.getUniqueProduct(id)
    def getAllForUser(self, email):
        col = self.client['products']
        req = col.find({"email":email})
        return req

            
               
        

    
    