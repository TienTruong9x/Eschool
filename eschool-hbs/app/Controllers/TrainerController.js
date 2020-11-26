const Trainer = require("../Models/Trainer.model");
class TrainerController {
  //[GET] /Admin/trainer
  getTrainer(req, res, next) {
    Trainer.find({}).then((trainers) => {
      res.render("trainer/trainer", {
        title: "Trainer | Nguyễn Tiến Trường",
        trainers,
      });
    });
  }

  //[GET] /Admin/trainer/add
  addTrainer(req, res, next) {
    res.render("trainer/addTrainer", {
      title: "Add Trainer | Nguyễn Tiến Trường",
    });
  }

  //[POST] /Admin/trainer/add
  addTrainerPost(req, res, next) {
    let trainer = new Trainer(req.body);
    trainer.save().then(() => {
      res.redirect("/Admin/trainer");
    });
  }

  //[GET] /Admin/trainer/edit/:slug
  editTrainer(req, res, next) {
    Trainer.findOne({ slug: req.params.slug }).then((trainer) => {
      res.render("trainer/editTrainer", {
        title: "Edit Trainer | Nguyễn Tiến Trường",
        trainer,
      });
    });
  }

  //[PUT] /Admin/trainer/edit/:slug
  editTrainerPut(req, res, next) {
    Trainer.updateOne({ slug: req.params.slug }, req.body).then(() => {
      res.redirect("/Admin/trainer");
    });
  }

  //[DELETE]] /Admin/trainer/delete/:id
  deleteTrainer(req, res, next) {
    Trainer.deleteOne({ _id: req.params.id }).then(() => {
      res.redirect("/Admin/trainer");
    });
  }
}

module.exports = new TrainerController();
