const asyncHandler = require("express-async-handler");

const Campground = require("../models/campgroundModel");
const User = require("../models/userModel");

//get all campgrounds
const getCampgrounds = asyncHandler(async (req, res) => {
  const campgrounds = await Campground.find({});
  res.status(200).json(campgrounds);
});

const getCampgroundById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);

  res.json(campground);
});

//post campground
const postCampground = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const campground = await Campground.create({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    image: req.body.image,
    user: req.user.id,
  });

  res.status(200).json(campground);
});

module.exports = { getCampgrounds, postCampground, getCampgroundById };
