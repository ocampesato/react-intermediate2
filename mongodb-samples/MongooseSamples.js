var mongoose = require('mongoose');

// a pending connection to the database 'mymongoose' on localhost 
mongoose.connect('mongodb://localhost/mymongoose');

// check if connection is successful
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// define a Person schema in mongoose
var personSchema = mongoose.Schema({
  fname: String,
  lname: String
})

//NOTE: add methods *before* compilation of schema 
personSchema.methods.hello = function () {
  var greeting = "My first name is " + this.fname;
  console.log(greeting);
}

// compile the schema into a model:
var Person = mongoose.model('Person', personSchema)

// open a connection with a callback:
db.once('open', function callback () {
  // create the first person 
  var p1 = new Person({ fname: 'Tom', lname:'Jones' });
  p1.hello();
  console.log("fname = "+p1.fname+" lname = "+p1.lname); 

  // create the second person 
  var p2 = new Person({ fname: 'Tanya', lname:'Jackson' });
  p2.hello();
  console.log("fname = "+p2.fname+" lname = "+p2.lname); 

  // save p1 
  p1.save(function (err, p1) {
    if (err) return console.error(err);
    console.log("Saved person p1");
  });

  // save p2 
  p2.save(function (err, p2) {
    if (err) return console.error(err);
    console.log("Saved person p2");
  });
  console.log("------------------------\n");

  // find all people 
  Person.find(function (err, people) {
    if (err) return console.error(err);
    console.log("Found people: "+people);
    console.log("------------------------\n");
  })

  // find people whose fname starts with 'T'
  Person.find({ fname: /^T/ }, function(err, people) {
    if (err) return console.error(err);
    console.log("First name starts with T: "+people);
    console.log("------------------------\n");
  });
});

