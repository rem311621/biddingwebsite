"use strict";

var express = require("express");

var app = express();
var PORT = process.env.PORT || "5000";
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(PORT, function () {
  console.log("Server start at ".concat(PORT));
});