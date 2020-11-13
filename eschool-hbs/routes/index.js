const authRoute = require("./auth/auth.route");
const siteRoute = require("./site.route");

function initRoutes(app) {
  app.use("/Auth", authRoute);
  app.use("/", siteRoute);
}

module.exports = initRoutes;
