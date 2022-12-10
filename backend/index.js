require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
