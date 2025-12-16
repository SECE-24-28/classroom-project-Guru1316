const app = require("./index.js");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config({
    path: "./config.env"
})

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB Connected Successfully");
})

console.log(process.env.DB_URL);

app.listen(process.env.PORT,() => {
    console.log("Server started in", process.env.PORT);
}) 