const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./Routes/UserRoutes.js");
const authRouter = require("./Routes/AuthRoutes.js");

app.use("/api/V3/auth", authRouter);

app.use("/api/V3/users/sri", userRouter);

module.exports = app;