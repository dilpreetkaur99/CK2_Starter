const express = require("express");

const router = express.Router();

const healthRoutes = require("./api/health");
const userRoutes = require("./api/users");

router.use("/", healthRoutes);
router.use("/", userRoutes);

module.exports = router;
/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints should expand this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});
router.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Missing credentials",
    });
  }

  return res.json({
    success: true,
    message: "Login successful",
  });
});
module.exports = { router };
