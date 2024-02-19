const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeeControllers2.js");

router.get("/", controller.landing_page);
router.get("/showAll", controller.showAll);
router.post("/add", controller.insertName);
router.post("/view", controller.showName);
router.post("/update", controller.updateName);
router.post("/delete", controller.deleteName);
router.get("/about", controller.about_page);

router.get("/staff/:name",controller.show_staff );

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("404 Not found.");
});

router.use(function (err, req, res, next) {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error.");
});

module.exports = router;
