#! node

let mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true
  })
  .then(() => console.log("connceted"))
  .catch(err => console.log(err));
