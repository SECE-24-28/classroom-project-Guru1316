const express = require("express");

const userController = require("../Controllers/UserController.js");

const userRouter = express.Router();

userRouter.route("/").get(userController.getAllUsers).post(userController.createUser);

userRouter.route("/:id").get(userController.getUser).put(userController.updateUser).delete(userController.deleteUser);

module.exports = userRouter;