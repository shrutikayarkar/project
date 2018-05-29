var express = require("express");
var router = express.Router();  //same as var app=x();

router.get("/", function(req,res){
var pagedata={title:"signup page",pagename:"signup/index"}
res.render("layout",pagedata);
});


router.post("/",function(req,res){
var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongo.connect(url,function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}

var database = client.db("project");
console.log(req.body);
database.collection("user").insert(req.body,function(err,result){
	if(err)
	{
		console.log("query error", err);
		return;
	}
console.log("...........",result);
// res.redirect("/");
res.redirect('/login');

});

});

});

module.exports=router;