const express = require("express");
const path = require("path");
const app = express();

const sequelize = require("./db.js");

/// Test db

async function initializeDb() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initializeDb();

/// Adding view and URL configs
app.use('/public',express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

/// Routes
const home = require("./routes/home");
const workflow = require("./routes/workflow");
const admin = require("./routes/admin");
const marketing = require("./routes/marketing");

app.use("/", home);
app.use("/app", workflow);
app.use("/admin", admin);
app.use(marketing);

app.listen(3000, function () {
  console.log("Server Started 🚀: PORT localhost:3000");
});
