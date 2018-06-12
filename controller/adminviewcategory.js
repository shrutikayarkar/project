var express = require("express");
var router = express.Router();

var cat = require("../model/category");
var mongodb = require("mongodb");

router.get("/",function(req,res) {
cat.find(function(err,result){
var pagedata = {title:"view category",pagename:"admin/viewcategory",data:result};
res.render("adminlayout",pagedata);
});
});

router.get("/delete/:id",function(req,res){
cat.remove({_id:mongodb.ObjectId(req.params.id)},function(err,result){
// console.log(result);
res.redirect("/admin/admin_view_category");
});
});

router.get("/edit/:id",function(req,res){
cat.findWhere({_id:mongodb.ObjectId(req.params.id)},function(err,result){
// console.log(result);
var pagedata = {title:"update category",pagename:"admin/updatecategory",data:result[0]};
// console.log(result);
res.render("adminlayout",pagedata);
});
});


// router.post("/update",function(req,res){
// console.log(req.body);
// var id = req.body.id;
// delete req.body.id;
// cat.updateWhere({_id:mongodb.ObjectId()},req.body,function(err,result){
// console.log(result);
// res.redirect("/admin/admin_view_category");
// });
// });
module.exports = router;