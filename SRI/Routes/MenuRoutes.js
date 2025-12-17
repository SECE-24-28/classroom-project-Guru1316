const express = require("express");

const menuController = require("../Controllers/MenuController.js");

const menuRouter = express.Router();

menuRouter.route("/").get(menuController.getAllMenus).post(menuController.createMenu);

menuRouter.route("/:id").get(menuController.getMenu).put(menuController.updateMenu).delete(menuController.deleteMenu);

menuRouter.route("/item/:id").get(menuController.getMenuItem).put(menuController.updateMenuItem).delete(menuController.deleteMenuItem);

module.exports = menuRouter;