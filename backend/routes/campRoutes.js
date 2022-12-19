const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  postCampground,
  getCampgrounds,
  getCampgroundById,
  deleteCampground,
  editCampground,
} = require("../controllers/campgroundController");

router.get("/", getCampgrounds);
router.get("/:id", getCampgroundById);
router.post("/", protect, postCampground);
router.put("/:id", editCampground);
router.delete("/:id", deleteCampground);

module.exports = router;
