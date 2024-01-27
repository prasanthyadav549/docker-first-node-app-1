const express = require("express");

const app = express();
const PORT = 3000;
app.get("/home", (req, res) => {
  res.send({
    OK: "success",
  });
});

app.listen(PORT, () => {
  console.log("server started on port:", PORT);
});
