const Course = require("../Models/Coure.model");
class CourseController {
  //[GET] me/course
  getCourse(req, res, next) {
    Course.find({}).then((courses) => {
      res.render("course/course", {
        title: "Course | Nguyễn Tiến Trường",
        courses,
      });
    });
  }

  //[GET] me/course/add
  addCourse(req, res, next) {
    res.render("course/addCourse", {
      title: "Add Course | Nguyễn Tiến Trường",
    });
  }

  //[POST] me/course/add
  addCoursePost(req, res, next) {
    let course = new Course(req.body);
    course.save().then(() => {
      res.redirect("/Me/course");
    });
  }

  //[GET] me/course/edit/:slug
  editCourse(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) => {
      console.log(course);
      res.render("course/editCourse", {
        title: "Edit Course | Nguyễn Tiến Trường",
        course,
      });
    });
  }

  //[PUT] me/course/edit/:slug
  editCoursePut(req, res, next) {
    Course.updateOne({ slug: req.params.slug }, req.body).then((course) => {
      res.redirect("/Me/course");
    });
  }

  deleteCourse(req, res, next) {
    Course.deleteOne({ _id: req.params.id }).then(() => {
      res.redirect("/Me/course");
    });
  }
}

module.exports = new CourseController();
