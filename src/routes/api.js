const express = require("express");

const router = express.Router();

const healthRoutes = require("./api/health");
const userRoutes = require("./api/users");

router.use("/", healthRoutes);
router.use("/", userRoutes);

module.exports = router;