const express = require("express");
const router = express.Router();

/// Home page route
router.get("/:page", (req, res) => {
  const page = req.params.page;
  return res.render("pages/marketing", { page });
});

module.exports = router;
