const express = require("express");

const fs = require("fs");

const dataController = require("../Controllers/DataController.js");

const dataRouter = express.Router()

dataRouter.route("/").get(dataController.getAllDatas).post(dataController.createData);
dataRouter.route("/:id").get(dataController.getData).put(dataController.updateData).delete(dataController.deleteData);

module.exports = dataRouter;