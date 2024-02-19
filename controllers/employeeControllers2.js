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
    res.render("employeeAdd", {
      change: " added to database",
      name: docs.name,
    });
  });
};
exports.showName = function (req, res) {
  console.log(req.body.name)
  db.viewEmployee(req.body.name).then((docs) => {
    res.render("employeeData", {
      title:"Show name",
      employee: docs,
    });
  });
};
exports.updateName = function (req, res) {
  let id = req.body._id;
  let name = req.body.name;
  db.updateEmployee(id, name)
    .then((docs) => {
      res.render("employeeChange", {
        title:"Updates",
        name:name,
        change:docs,

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
      number: docs,
    });
  });
};

exports.about_page= function(req, res) { 
  res.status(200);  
  res.redirect('/about.html');
}

exports.show_staff= function (req,res,next){
  db.viewEmployee(req.params.name).then((docs) => {
    if (!docs) return next(); 
    res.render("staffPage", {
      staffInfo: docs,
    })
  });
}

