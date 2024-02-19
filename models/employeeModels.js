const nedb = require("nedb");

class EmployeesData {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log("Database file ", dbFilePath);
    } else {
      this.db = new nedb();
    }
  }

  // showAll
  showAllEmployees() {
    return new Promise((resolve, reject) => {
      this.db.find({}, function (err, docs) {
        if (err) {
          reject(err);
          console.log("error");
        } else {
          resolve(docs);
        }
      });
    });
  }

  //add
  insertEmployee(newEmployee) {
    return new Promise((resolve, reject) => {
      this.db.insert({ name: newEmployee }, function (err, docs) {
        if (err) {
          reject(err);
          console.log("error", err);
        } else {
          resolve(docs);
          console.log("document inserted", docs);
        }
      });
    });
  }

  // View
  viewEmployee(employee) {
    return new Promise((resolve, reject) => {
      this.db.find({ name: employee }, function (err, doc) {
        if (err) {
          reject(err);
          console.log("error");
        } else {
          resolve(doc);
          console.log(doc);
        }
      });
    });
  }

  //Update
  updateEmployee(id, name) {
    return new Promise((resolve, reject) => {
      this.db.update(
        { _id: id },
        { $set: { name: name } },
        {},
        function (err, docs) {
          if (err) {
            reject(err);
            console.log("error updating documents", err);
          } else {
            resolve(docs);
            console.log(docs, "documents updated");
          }
        }
      );
    });
  }

  //Delete
  deleteEmployee(id) {
    return new Promise((resolve, reject) => {
      this.db.remove({ _id: id }, {}, function (err, docs) {
        if (err) {
          reject(err);
          console.log("error deleting document");
        } else {
          resolve(docs);
          console.log(docs, "document removed from database");
        }
      });
    });
  }

}
module.exports = EmployeesData;
