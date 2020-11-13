class AuthController {
  //[GET] /
  login(req, res, next) {
    res.render("auth/login", { title: "Đăng Nhập | Nguyễn Tiến Trường" });
  }

  //[GET] /search
  register(req, res) {
    res.render("auth/register", { title: "Đăng Ký | Nguyễn Tiến Trường" });
  }
}

module.exports = new AuthController();
