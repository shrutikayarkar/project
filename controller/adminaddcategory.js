var express = require("express");
var router = express.Router();

var cat = require("../model/category");
var mongodb = require("mongodb");

router.get("/",function(req,res) {
var pagedata = {title:"add category",pagename:"admin/addcategory",message:req.flash("msg")};
res.render("adminlayout",pagedata);
});

router.post("/",function(req,res){
cat.insert(req.body,function(err,result){
req.flash("msg", "Successfully Added");
res.redirect("/admin/admin_add_category");
console.log(result);
});
});

router.post("/update",function(req,res){
console.log(req.body);
var id = req.body.id;
delete req.body.id;
cat.updateWhere({_id:mongodb.ObjectId(id)},req.body,function(err,result){
console.log(result);
res.redirect("/admin/admin_view_category");
});
});

module.exports = router;