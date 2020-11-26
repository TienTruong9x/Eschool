const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//slug gennerator
var slug = require("mongoose-slug-generator");

const Project = new Schema(
  {
    projectName: { type: String },
    slug: { type: String, slug: "projectName", unique: true },
    image: { type: String, default: "/images/project-2.jpg" },
  },
  { timestamps: true, collection: "projects" }
);

mongoose.plugin(slug);

module.exports = mongoose.model("project", Project);
