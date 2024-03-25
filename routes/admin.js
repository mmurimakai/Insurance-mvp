const express = require("express");
const router = express.Router();

/// Home page route
router.get("/", (req, res) => {
  return res.render("pages/admin");
});

module.exports = router;
