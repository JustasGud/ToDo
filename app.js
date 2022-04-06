const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // binds date.js file so data could be accessed.

// for debugging: console.log(date()); // added () in app.js file to control when the function is run in date.js file

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"]; // it is possible to push new items to CONST array, but not to reasign to another array.
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
//How to add staic files to be served up to the website
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate(); // date() is how I use module exported from date.js file.
  res.render("list", { listTitle: day, newListItems: items });
});
// HANDLING POST REQUEST FROM THE FORM
app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    // Checking which page value was entered to add it to the correct array
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
