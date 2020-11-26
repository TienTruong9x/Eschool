const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//slug gennerator
var slug = require("mongoose-slug-generator");

const Trainer = new Schema(
  {
    trainerName: { type: String },
    position: { type: String },
    slug: { type: String, slug: "trainerName", unique: true },
    image: { type: String, default: "/images/trainer-2.jpg" },
  },
  { timestamps: true, collection: "trainers" }
);

mongoose.plugin(slug);

module.exports = mongoose.model("trainer", Trainer);
