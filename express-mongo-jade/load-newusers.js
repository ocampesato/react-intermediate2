// you can invoke either of these commands:
// mongo localhost:27017/userdb load-newusers.js
// mongo localhost:27017/userdb --quiet load-newusers.js

// drop the current database 
db.dropDatabase()

// insert the data for the restaurants 
db.users.insert({ fname: 'Janice',  lname: 'Smith'});
db.users.insert({ fname: 'Steven',  lname: 'Stone'});
db.users.insert({ fname: 'Yuki',    lname: 'Tanaka'});
db.users.insert({ fname: 'Hideki',  lname: 'Hiura'});
db.users.insert({ fname: 'Himiko',  lname: 'Yamamoto'});

