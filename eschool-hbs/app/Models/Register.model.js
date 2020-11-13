const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Register = new Schema(
  {
    username: String,
    email: String,
    password: String,
    passwordConfirm: String,
    gender: Number,
    firstname: String,
    lastname: String,
    subscription: String,
    terms: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", Register);
