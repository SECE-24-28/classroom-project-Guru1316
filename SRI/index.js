const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./Routes/UserRoutes.js");
const authRouter = require("./Routes/AuthRoutes.js");
const menuRouter = require("./Routes/MenuRoutes.js");

app.use("/api/V3/auth", authRouter);

app.use("/api/V3/users/sri", userRouter);

app.use("/api/V3/menu", menuRouter);

module.exports = app;