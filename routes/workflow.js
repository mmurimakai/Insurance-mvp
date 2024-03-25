const express = require("express");
const { Provider, Category } = require("../core/models/insurance");
const router = express.Router();

/// Home page route
router.get("/", async (req, res) => {
  try {
    const partners = await Provider.findAll();
    const categories = await Category.findAll();

    if (categories.length < 1 || partners.length < 1) {
      throw Error(
        "No Insurance categories or partners found, please contact admin"
      );
    } else {
      return res.render("pages/workflow", {
        form: { partners, categories },
      });
    }
  } catch (e) {
    return res.render("pages/error", {
      msg: e,
    });
  }
});

router.post("/", (req, res) => {
  // {
  //   name: 'Bug Crackers',
  //   email: 'bsgvigvqwqnousxbdo@twzhhq.com',
  //   phone: '01234567890',
  //   dob: '2024-03-01',
  //   budget: '2934823',
  //   insurance: 'Life Insurance',
  //   address: '32jkdf',
  //   occupation: 'sdfs2'
  // }

  const payload = {
    res: {
      policies: [
        {
          title: "Madison Insurance Company",
          description: "Betterlife Ignite Plan (For Singles Age 18-30 only)",
          cost: 40000,
        },
      ],
      details: [
        {
          name: "Contact Information",
          info: [
            "Name: John Doe",
            "Email: john.doe@example.com",
            "Phone: +1 123-456-7890",
          ],
        },
      ],
      categories: ["Life Insurance", "Health Insurance"],
    },
  };
  return res.render("pages/workflow", payload);
});

module.exports = router;
