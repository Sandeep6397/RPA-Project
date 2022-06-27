// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const LeaveRequestModel = new mongoose.Schema({
  employeeId: {
    type: String,
  },
  employeeName: {
    type: String,
  },
  accessType: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  leaveType: {
    type: String,
  },
  duration: {
    type: String,
  },
  status: {
    type: String,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("leave_request", LeaveRequestModel);
