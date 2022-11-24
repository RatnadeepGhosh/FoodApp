const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db_link  = require('./secrets');
app.use(express.json());


const userRouter = express.Router();
const authRouter = express.Router();
app.use("/user", userRouter);
app.use("/auth", authRouter);



app.listen(5000);


mongoose.connect(db_link)
    .then(function (db) {
        console.log("db connected");
        // console.log(db);
    })
    .catch(function (err) {
        console.log(err);
    });