const asyncHandler = require("express-async-handler");

const Campground = require("../models/campgroundModel");

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
    price: req.body.price,
  });

  res.status(200).json(campground);
});

//delete campground
const deleteCampground = asyncHandler(async (req, res) => {
  const campground = await Campground.findById(req.params.id);

  if (!campground) {
    res.status(400);
    throw new Error("Campground not found");
  }

  await campground.remove();

  res.status(200).json({ id: req.params.id });
});

//edit campground
const editCampground = asyncHandler(async (req, res) => {
  const { title, location, price, description, image } = req.body;

  Campground.findByIdAndUpdate(
    req.params.id,
    {
      title,
      location,
      price,
      description,
      image,
      price,
    },
    { new: true, runValidators: true, context: "query" }
  ).then((updatedCampground) => {
    res.json(updatedCampground);
  });
});
module.exports = {
  getCampgrounds,
  postCampground,
  getCampgroundById,
  editCampground,
  deleteCampground,
};
