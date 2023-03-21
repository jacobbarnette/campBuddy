const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Campground = require("../models/campgroundModel");

const postComment = asyncHandler(async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id);

    console.log(
      `this is from com ment controller babbbbbyyy`,
      req.body.comment
    );
    const comment = {
      user: req.user._id,
      comment: req.body.comment,
    };
    console.log(comment);

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
