var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Define Mongoose Schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
});

// Define Mongoose Model
var User = mongoose.model("User", userSchema);

const username = process.env.username;
const password = process.env.password;
// Connect to MongoDB
mongoose
  .connect(`mongodb+srv://${username}:${password}@chatappp.qkoibo4.mongodb.net/sumiranm`)
  .then(() => {
    console.log(`Connected to Database`);
  })
  .catch((err) => {
    console.log(`Error in Connecting to Database: `, err);
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Handle POST request to /contribute endpoint
app.post(`/`, (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;

  var newUser = new User({
    name: name,
    email: email,
    subject: subject,
  });


  // Save the new user to the database
  newUser
    .save()
    .then(() => {
      console.log("Record Inserted Successfully");
      return res.redirect("/contribute.html");
    })
    .catch((err) => {
      console.log("Error inserting record: ", err);
      return res.status(500).send("Error inserting record");
    });
});


// Handle POST request to /signup endpoint
app.post(`/signup`, (req, res) => {
  var name = req.body.name;
  var email = req.body.email;

  var newUser = new User({
    name: name,
    email: email,
  });

  // Save the new user to the database
  newUser
    .save()
    .then(() => {
      console.log("Record Inserted Successfully");
      return res.redirect("/signup.html"); // Redirect to signup page
    })
    .catch((err) => {
      console.log("Error inserting record: ", err);
      return res.status(500).send("Error inserting record");
    });
});



// Handle GET request to root endpoint
app.get("/", (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  return res.redirect("/index.html");
});
