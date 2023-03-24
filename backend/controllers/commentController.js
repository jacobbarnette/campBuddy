const express = require("express");
const asyncHandler = require("express-async-handler");

const Campground = require("../models/campgroundModel");

const postComment = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.comment) {
    res.status(400);
    throw new Error("Please add a comment");
  }
  try {
    const campground = await Campground.findById(req.params.id);

    const comment = {
      user: req.user._id,
      comment: req.body.comment,
      _id: campground._id,
      createdAt: Date.now(),
    };

    campground.comments.push(comment);

    await campground.save();
    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "server error" });
  }
});

module.exports = {
  postComment,
};
