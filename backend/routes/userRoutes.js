const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
//register user
router.post("/", registerUser);
//login user
router.post("/login", loginUser);
//get user info
router.get("/me", getMe);

module.exports = router;
