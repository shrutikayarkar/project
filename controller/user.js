var express = require("express");
var router = express.Router();

var user = require("../model/user");
var mongodb = require("mongodb");
var path = require('path');
var fs = require("fs");
var filename = require("../helper/changefilename");

router.get("/",function(req,res) {
	console.log("+++++"+req.session.userid);
user.findwhere({_id:mongodb.ObjectId(req.session.userid)},function(err,result){
var pagedata = {title:"user page",pagename:"user/index",data:result[0]};
res.render("layout",pagedata);
});
});

router.post("/",function(req,res){
console.log(req.files);

		var file = req.files.image;
		var newfile = filename(file.name)
		var filepath = path.resolve("public/images/user/"+newfile);
		file.mv(filepath);
		req.body.image = newfile;
		var old_name = req.body.old_name;
		if(old_name!="")
		{
			
			var oldpath = path.resolve("public/images/user/"+old_name);
			fs.unlinkSync(oldpath);
		}

	// var id = req.body.id;
	// delete req.body.id;

user.update({_id:mongodb.ObjectId(req.session.userid)},req.body,function(err,result){
res.redirect("/user");
});
});

router.get("/remove",function(req,res){
user.remove((req.files),function(err,result){
res.redirect("/user")
});
});


router.get("/update",function(req,res){
user.findwhere({_id:mongodb.ObjectId(req.session.userid)},function(err,result){
var pagedata = {title:"edit page",pagename:"user/edit",data:result[0]};
res.render("layout",pagedata);
});
});

router.post("/update_info",function(req,res){

user.update({_id:mongodb.ObjectId(req.session.userid)},req.body,function(err,result){
res.redirect("/user");
});
});





module.exports = router;
//incomplete