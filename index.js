const express = require("express");
const bodyParser = require("body-parser");
const { Schema } = require("mongoose");
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://admin-dew:Dew0894679058@cluster0.aoa8c4g.mongodb.net/feedbackmywebDB').then(
  () => { 
     console.log("Connected to DB!");
 },
  err => { 
    console.log(err);
 }
);

const postsSchema = new mongoose.Schema ({
  yourname: String,
  youremail: String,
  subject: String,
  message:String
})

const Post = mongoose.model("Post", postsSchema);

app.post("/", function(req, res){

  const urname = req.body.urname;
  const uremail = req.body.uremail;
  const subj = req.body.subj;
  const mess = req.body.mess;

  const post = new Post({
    yourname: urname,
    youremail: uremail,
    subject: subj,
    message: mess
  });

  Post.save();
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
