require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const connectDB = require("./config/db");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/campgrounds", require("./routes/campRoutes"));

connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
