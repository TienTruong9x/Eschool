const authRoute = require("./auth/auth.route");
const siteRoute = require("./site.route");
const courseRoute = require("./course/course.route");
const trainerRoute = require("./trainer/trainer.route");

function initRoutes(app) {
  app.use("/Auth", authRoute);
  app.use("/", siteRoute);
  app.use("/Me/course", courseRoute);
  app.use("/Admin/trainer", trainerRoute);
}

module.exports = initRoutes;
