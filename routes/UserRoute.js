const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  refreshToken,
  changePassword,
} = require("../controllers/UserController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
router.post("/change-password", protect, changePassword);
router.get("/me", protect, getMe);

module.exports = router;
