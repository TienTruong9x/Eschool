class SiteController {
  //[GET] /
  index(req, res, next) {
    res.send("index");
  }
}

module.exports = new SiteController();
