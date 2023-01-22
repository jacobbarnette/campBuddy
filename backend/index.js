require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("frontend"));
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/campgrounds", require("./routes/campRoutes"));

connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
