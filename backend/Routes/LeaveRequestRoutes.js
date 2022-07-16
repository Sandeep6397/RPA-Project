const express = require("express");
const leaveRequestRouter = express.Router();

// import the controller file for fcuntions
const leaveRequestController = require("../Controllers/LeaveRequestController");

// use
leaveRequestRouter.get("/leaveRequest", leaveRequestController.baseRoute);

// create
leaveRequestRouter.post(
  "/leaveRequest/create",
  leaveRequestController.createLeave
);

// read all
leaveRequestRouter.get("/leaveRequest/get", leaveRequestController.getLeave);

// read one
leaveRequestRouter.get(
  "/leaveRequest/get/:id",
  leaveRequestController.getSingleLeave
);

// update
leaveRequestRouter.put(
  "/leaveRequest/update/:id",
  leaveRequestController.updateLeave
);

// delete
leaveRequestRouter.delete(
  "/leaveRequest/delete/:id",
  leaveRequestController.deleteLeave
);

leaveRequestRouter.patch(
  "/leaveRequest/update/objid/:objid",
  leaveRequestController.updateLeaveByEid
);

module.exports = leaveRequestRouter;
