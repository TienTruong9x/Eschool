const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//slug gennerator
var slug = require('mongoose-slug-generator');

const Course = new Schema({
  courseName:{type:String},
  description:{type:String},
  price:{type:Number},
  slug:{type:String,slug:'name',unique},
  image:{type:String},
},{timestamps:true,collection:'course'});

mongoose.plugin(slug);

module.exports=mongoose.model('course',Course);
