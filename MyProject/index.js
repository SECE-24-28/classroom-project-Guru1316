const express = require("express");

const dataRouter = require("./Routes/DataRoutes.js");

const app = express();

app.use(express.json());

app.use((req, res,next) => {
    const now = new Date();
    req.requestTimeOfHit = now.toLocaleString();
    next();
})

app.use((req, res, next) => {
    req.msg = "Hi";
    next();
})

const PORT = 9000;

app.use("/api/V1/menu", dataRouter);


app.listen(PORT, () => {
    console.log("Server Started Successfully In Server: ",PORT);
})