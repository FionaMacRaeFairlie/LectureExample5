const employeeDAO = require("../models/employeeModels");
const db = new employeeDAO("emp.db");

exports.landing_page = function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
};
exports.showAll = function (req, res) {
    db.showAllEmployees().then((docs) => {
      res.render("employeeData", {
        employee: docs,
      });
    });
  };
exports.insertName = function (req, res) {
  db.insertEmployee(req.body.name).then((docs) => {
    res.render("employeeChange", {
      change: " added to database",
      employee: docs,
    });
  });
};
exports.showName = function (req, res) {
  db.viewEmployee(req.body.id).then((docs) => {
    res.render("employeeData", {
      title:"Show name",
      employee: docs,
    });
  });
};
exports.updateName = function (req, res) {
  let id = req.body.id;
  let name = req.body.name;
  db.updateEmployee(id, name)
    .then((docs) => {
      res.render("employeeChange", {
        title:"Updates",
        change: "user updated",
        employees: docs,
      });
    })
    .catch((err) => {
      console.log("Error: ");
      console.log(JSON.stringify(err));
    });
};
exports.deleteName = function (req, res) {
  let id = req.body.id;
  db.deleteEmployee(id).then((docs) => {
    res.render("employeeDelete", {
      change: "removed from database",
      number: docs,
    });
  });
};

exports.about_page= function(req, res) { 
  res.status(200);  
  res.redirect('/about.html');
}

