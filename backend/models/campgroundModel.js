const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  text: {
    type: String,
    required: [true, "Please add a comment"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

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
  price: {
    type: String,
    required: [true, "Please add a campground price"],
  },
  comments: [commentSchema],
});

module.exports = mongoose.model("Campground", campgroundSchema);
