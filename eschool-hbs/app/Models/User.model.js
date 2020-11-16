const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    passwordConfirm: { type: String },
    gender: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    subscription: { type: String, default: "off" },
    terms: { type: String, default: "off" },
  },
  { timestamps: true, collection: "users" }
);

User.method.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

User.method.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("users", User);
