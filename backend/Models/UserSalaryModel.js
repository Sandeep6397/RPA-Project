// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const UserSalaryModel = new mongoose.Schema({
  employeeId: {
    type: String,
  },
  salaryDate: {
    type: String,
  },
  grossPay: {
    type: String,
  },
  salary:{
    type: String,
  },
  deductions: {
    type: String,
  },
  paymentStatus: {
    type: String,
  },
});

module.exports = mongoose.model("user_salary", UserSalaryModel);
