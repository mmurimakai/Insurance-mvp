const express = require("express");
const router = express.Router();

// TODO: Build routes for sections
// TODO: SSE setup

/// Home page route
router.get("/", (req, res) => {
  return res.render("pages/admin",{config: {
    nav: [
      {name: "home",icon: "public/img/icons/home.svg",href: "#"},
      {name: "policies",icon: "public/img/icons/policies.svg",href: "#"},
      {name: "insurance providers",icon: "public/img/icons/user.svg",href: "#"},
      {name: "clients",icon: "public/img/icons/users.svg",href: "#"}
    ]
    }});
});

module.exports = router;
