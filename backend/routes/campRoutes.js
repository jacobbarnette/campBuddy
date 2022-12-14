const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  postCampground,
  getCampgrounds,
  getCampgroundById,
} = require("../controllers/campgroundController");

router.get("/", getCampgrounds);
router.get("/:id", getCampgroundById);
router.post("/", protect, postCampground);

module.exports = router;
