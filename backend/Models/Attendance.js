// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const AttendanceModel = new mongoose.Schema({
  employeeId: {
    type: String,
  },
  employeeName: {
    type: String,
  },
  inTime: {
    type: String,
  },
  outTime: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("attendance", AttendanceModel);
