const Register = require("../Models/Register.model");

class AuthController {
  //[GET] /
  login(req, res, next) {
    Register.find().then((data) => {
      res.render("auth/login", {
        title: "Đăng Nhập | Nguyễn Tiến Trường",
        data,
      });
    });
  }

  //[GET] /Auth/register
  register(req, res, next) {
    res.render("auth/register", { title: "Đăng Ký | Nguyễn Tiến Trường" });
  }

  //[POST] /Auth/register
  registerPost(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let passwordConfirm = req.body.passwordConfirm;

    if (password !== passwordConfirm) {
      console.log("2 Password phải trùng nhau");
      return;
    }

    Register.findOne({ username }).then((user) => {
      if (user) {
        console.log("Username đã tồn tại.");
        res.render("auth/register", {
          title: "Đăng Ký | Nguyễn Tiến Trường",
          username: "Username đã tồn tại.",
        });
        return;
      } else {
        let user = new Register(req.body);
        user.save().then(() => {
          res.redirect("/Auth/login");
        });
      }
    });
  }
}

module.exports = new AuthController();
