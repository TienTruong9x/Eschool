const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//slug gennerator
var slug = require("mongoose-slug-generator");

const Course = new Schema(
  {
    courseName: { type: String },
    description: { type: String },
    price: { type: Number },
    slug: { type: String, slug: "courseName", unique: true },
    image: { type: String, default: "/images/course-2.jpg" },
  },
  { timestamps: true, collection: "courses" }
);

mongoose.plugin(slug);

module.exports = mongoose.model("course", Course);
