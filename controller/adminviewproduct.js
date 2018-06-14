var express = require("express");
var router = express.Router();

var pro = require("../model/product");
var cat = require("../model/category");
var mongodb = require("mongodb");
var imagename = require("../helper/changefilename");
var path = require("path");

router.get("/",function(req,res) {
pro.find(function(err,result){
var pagedata = {title:"view category",pagename:"admin/viewproduct",data:result};
res.render("adminlayout",pagedata);

});
});

router.get("/delete/:id",function(req,res){
// pro.remove({_id:mongodb.ObjectId(req.query.id)},function(err,result){
pro.remove({_id:mongodb.ObjectId(req.params.id)},function(err,result){
// console.log(result);
res.redirect("/admin/admin_view_product");

});
});

router.get("/edit/:id",function(req,res){
cat.find(function(err,result){
var catedata = result;

pro.findWhere({_id:mongodb.ObjectId(req.params.id)},function(err,result){
var data = result[0];
var pagedata = {title:"update product",pagename:"admin/updateproduct",data:data,catedata:catedata};
res.render("adminlayout",pagedata);
});
});
});
router.post("/update",function(req,res){
// console.log(req.files);
var id = req.body.id;
delete req.body.id;

if(req.files.image)
{
var file = req.files.image;
var newname = imagename(file.name);
var filepath = path.resolve("public/product_image/"+newname);
file.mv(filepath);
req.body.image = newname;
}


pro.updateWhere({_id:mongodb.ObjectId(id)},req.body,function(err,result){
res.redirect("/admin/admin_view_product");
});
});

module.exports = router;