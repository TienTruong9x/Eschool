const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27018`/Eschool", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connect oke");
  } catch (error) {
    console.log("Connect fails : " + error);
  }
}

module.exports = { connect };
