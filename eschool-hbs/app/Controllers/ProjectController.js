const Project = require("../Models/Project.model");
class ProjectController {
  //[GET] /Admin/projects
  getProjects(req, res, next) {
    Project.find({}).then((projects) => {
      res.render("projects/projects", {
        title: "Project | Nguyễn Tiến Trường",
        projects,
      });
    });
  }

  //[GET] /Admin/projects/add
  addProjects(req, res, next) {
    res.render("projects/addProjects", {
      title: "Add project | Nguyễn Tiến Trường",
    });
  }

  //[POST] /Admin/projects/add
  addProjectsPost(req, res, next) {
    let project = new Project(req.body);
    project.save().then(() => {
      res.redirect("/Admin/projects");
    });
  }

  //[GET] /Admin/projects/edit/:slug
  editProjects(req, res, next) {
    Project.findOne({ slug: req.params.slug }).then((project) => {
      res.render("projects/editProjects", {
        title: "Edit project | Nguyễn Tiến Trường",
        project,
      });
    });
  }

  //[PUT] /Admin/projects/edit/:slug
  editProjectsPut(req, res, next) {
    Project.updateOne({ slug: req.params.slug }, req.body).then(() => {
      res.redirect("/Admin/projects");
    });
  }

  //[DELETE]] /Admin/project/delete/:id
  deleteProjects(req, res, next) {
    Project.deleteOne({ _id: req.params.id }).then(() => {
      res.redirect("/Admin/projects");
    });
  }
}

module.exports = new ProjectController();
