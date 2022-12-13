const mongoose = require("mongoose");

const campgroundSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Please add a campground title"],
  },
  location: {
    type: String,
    required: [true, "Please add a campground location"],
  },
  description: {
    type: String,
    required: [true, "Please add a campground description"],
  },
  image: {
    type: String,
    required: [true, "Please add a campground image"],
  },
});

module.exports = mongoose.model("Campground", campgroundSchema);
