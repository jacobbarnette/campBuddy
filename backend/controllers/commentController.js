const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Campground = require("../models/campgroundModel");

const postComment = asyncHandler(async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);
    const comment = {
      user: req.user._id,
      text: req.body.comment,
    };
    campground.comments.push(comment);
    await campground.save();
    res.status(201).send({ message: "Comment added" });
  } catch (error) {
    console.error(err);
    res.status(500).send({ message: "server error" });
  }
});

router.post("/:id/comments", async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);
    const comment = {
      user: req.user._id, // assuming you have user authentication in place
      text: req.body.comment,
    };
    campground.comments.push(comment);
    await campground.save();
    res.status(201).send({ message: "Comment added" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = {
  postComment,
};
