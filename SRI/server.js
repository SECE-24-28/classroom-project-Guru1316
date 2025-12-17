const app = require("./index.js");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const cors = require("cors");

dotenv.config({
    path: "./config.env"
})

app.use(cors());

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB Connected Successfully");
})

console.log(process.env.DB_URL);

app.listen(process.env.PORT,() => {
    console.log("Server started in", process.env.PORT);
}) 