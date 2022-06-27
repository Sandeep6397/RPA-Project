const express = require("express");
const attendanceRouter = express.Router();

// import the controller file for fcuntions
const attendanceController = require("../Controllers/AttendanceController.js");

// use
attendanceRouter.get("/attendance", attendanceController.baseRoute);

// create
attendanceRouter.post("/attendance/create", attendanceController.addAttendance);

// read all
attendanceRouter.get("/attendance/get", attendanceController.getAttendance);

attendanceRouter.delete(
  "/attendance/delete",
  attendanceController.deleteAttendance
);
module.exports = attendanceRouter;
