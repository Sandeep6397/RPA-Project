const express = require("express");
const userRouter = express.Router();

// import the controller file for fcuntions
const userController = require("../Controllers/UserController");

// use
userRouter.get("/user", userController.baseRoute);

// create
userRouter.post("/user/create", userController.createUser);

// read all
userRouter.get("/user/get", userController.getUser);

// read one
userRouter.get("/user/get/:id", userController.getSingleUser);

// update
userRouter.patch("/user/update/:id", userController.updateUser);

// delete
userRouter.delete("/user/delete/:id", userController.deleteUser);

userRouter.get("/user/get/eid/:eid", userController.getUserByEid);
userRouter.patch("/user/update/eid/:eid", userController.updateUserByEid);
userRouter.delete("/user/delete/eid/:eid", userController.deleteUserByEid);
userRouter.get("/user/get/eid", userController.getUserEid);

//sync user
userRouter.post("/user/sync",userController.syncUser)

module.exports = userRouter;
