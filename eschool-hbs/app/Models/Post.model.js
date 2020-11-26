const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//slug gennerator
var slug = require("mongoose-slug-generator");

const Post = new Schema(
  {
    postName: { type: String },
    slug: { type: String, slug: "postName", unique: true },
    description: { type: String },
    heart: { type: Number, default: 0 },
    image: { type: String, default: "/images/post-2.jpg" },
  },
  { timestamps: true, collection: "posts" }
);

mongoose.plugin(slug);

module.exports = mongoose.model("post", Post);
