const express = require("express");

const userRouter = require("./Routes/UserRoutes.js");

const app = express();

app.use(express.json());

app.use("/api/V3/users/sri", userRouter);

module.exports = app;