const Course = require("../Models/Coure.model");
const Project = require("../Models/Project.model");
const Trainer = require("../Models/Trainer.model");
const Post = require("../Models/Post.model");

class SiteController {
  //[GET] /
  index(req, res, next) {
    var course = Course.find({});
    var trainer = Trainer.find({}).limit(4);
    var post = Post.find({}).limit(3);
    var project = Project.find({}).limit(6);
    Promise.all([course, trainer, post, project]).then(
      ([courses, trainers, posts, projects]) => {
        console.log(courses);
        res.render("index", {
          title: "Trang Chủ | Nguyễn Tiến Trường",
          courses,
          trainers,
          posts,
          projects,
        });
      }
    );
  }
}

module.exports = new SiteController();
