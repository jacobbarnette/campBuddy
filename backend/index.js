require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
