const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/home", (req, res) => {
  res.send({
    OK: "success",
  });
});

app.listen(PORT, () => {
  console.log("server started on port:", PORT);
});
