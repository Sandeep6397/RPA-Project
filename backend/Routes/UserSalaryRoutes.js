const express = require("express");
const userSalaryRouter = express.Router();

// import the controller file for fcuntions
const userSalaryController = require("../Controllers/UserSalaryController");

// use
userSalaryRouter.get("/userSalary", userSalaryController.baseRoute);

// create
userSalaryRouter.post(
  "/userSalary/create",
  userSalaryController.createUserSalary
);

// read all
userSalaryRouter.get("/userSalary/get", userSalaryController.getUserSalary);

// read one
userSalaryRouter.get(
  "/userSalary/get/:id",
  userSalaryController.getSingleUserSalary
);

// update
userSalaryRouter.put(
  "/userSalary/update/:id",
  userSalaryController.updateUserSalary
);

// delete
userSalaryRouter.delete(
  "/userSalary/delete/:id",
  userSalaryController.deleteUserSalary
);

userSalaryRouter.get(
  "/userSalary/get/eid/:eid",
  userSalaryController.getEmployeeSalary
);

userSalaryRouter.post(
  "/userSalary/sync",
  userSalaryController.salarySync
);

module.exports = userSalaryRouter;
