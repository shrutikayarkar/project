var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function(obj,cb){

connect.init(function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}

var database = client.db(config.dbName);
database.collection("user").insert(obj,cb);

});
};

module.exports.find = function(cb){

connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("user").find().toArray(cb);

});
};

module.exports.findwhere = function(obj,cb){

connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("user").find(obj).toArray(cb);

});
};

module.exports.remove = function(obj,cb){

connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("user").remove(obj,cb);
});
};

module.exports.update = function(where,obj,cb){

connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("user").update(where,{$set:obj},cb);
});
};