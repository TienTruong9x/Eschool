class SiteController {
  //[GET] /
  index(req, res, next) {
    res.render("index", { title: "Trang Chủ | Nguyễn Tiến Trường" });
  }
}

module.exports = new SiteController();
