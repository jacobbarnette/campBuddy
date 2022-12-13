const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  postCampground,
  getCampgrounds,
} = require("../controllers/campgroundController");

router.get("/", getCampgrounds);

router.post("/", protect, postCampground);

module.exports = router;
