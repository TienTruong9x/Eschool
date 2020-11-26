const changeDate = require("./changeDate");

function setHelper(hbs) {
  hbs.registerHelper("changeDate", changeDate);
}
module.exports = { setHelper };
