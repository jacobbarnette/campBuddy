const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { postComment } = require("../controllers/commentController");

router.post("/:id/comments", protect, postComment);
