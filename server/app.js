const express = require("express");
const app = express();

const PORT = process.env.PORT || "5000";

app.get("/", (req, res) => {
  res.send("Hello World Gay");
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
