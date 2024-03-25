const express = require("express");
const router = express.Router();

// TODO: Build routes for sections
// TODO: SSE setup

/// Home page route
router.get("/", (req, res) => {
  return res.render("pages/admin");
});

module.exports = router;
