// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const UserModel = new mongoose.Schema({
  employeeId: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
  },
  departmentName: {
    type: String,
  },
  designation: {
    type: String,
  },
  salary: {
    type: String,
  },
  bankName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  branchName: {
    type: String,
  },
  password: {
    type: String,
  },
  accessType: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserModel);
