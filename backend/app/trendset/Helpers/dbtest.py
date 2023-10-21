from  dbHelperclass import dbHelper as dbh

conn = dbh("mongodb+srv://trendset:FIfRuK42erNOir02@trendset.plb5zxd.mongodb.net/","trendset")
out = conn.getUser(1234)
print(out)
print(conn.addUser(111,"Corey","liv","co@c.com"))
