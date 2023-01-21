require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const connectDB = require("./config/db");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("frontend"));
app.use(cors());
console.log(MONGO_URI);
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/campgrounds", require("./routes/campRoutes"));

connectDB();

app.get("/", (req, res) => {
  res.sendStatus(200);
  res.send("hello");
});
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
