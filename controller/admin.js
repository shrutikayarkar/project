var express = require("express");
var router = express.Router(); //same as var app=x();

var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var config = require("../config/db");

router.get("/", function(req,res){
var pagedata = {title:"admin",pagename:"admin/index",message:req.flash("msg"),message1:req.flash("msg1")};
res.render("adminlayout",pagedata);
});

router.post("/",function(req,res){
var u = req.body.username;
var p = req.body.password;
mongo.connect(url,function(err,client){
var database = client.db(config.dbName);
database.collection('admin').find({username:u}).toArray(function(err,result){
if(result.length==0)
	{
		req.flash("msg", "This username incorrect");
		res.redirect("/admin")
	}
else
		{
			if(result[0].password==p)
			{
				req.session.adminid=result[0]._id;
				req.session.admin_name=result[0].adminName;
				req.session.is_admin_logged_in=true;
				res.redirect("/");
			}
			else
			{
				req.flash("msg1", "This Password incorrect");
				res.redirect("/admin");
			}
		}

});


});


});
module.exports=router;