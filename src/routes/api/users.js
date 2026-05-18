const express = require("express");

const router = express.Router();

router.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required",
    });
  }

  return res.json({
    success: true,
    user: {
      name,
      email,
    },
  });
});

module.exports = router;