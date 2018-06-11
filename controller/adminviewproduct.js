var express = require("express");
var router = express.Router();

var pro = require("../model/product");
var mongodb = require("mongodb");

router.get("/",function(req,res) {
pro.find(function(err,result){
var pagedata = {title:"view category",pagename:"admin/viewproduct",data:result};
res.render("adminlayout",pagedata);

});
});

router.get("/delete",function(req,res){
pro.remove({_id:mongodb.ObjectId(req.query.id)},function(err,result){
console.log(result);
res.redirect("/admin/admin_view_product");

});
});
module.exports = router;