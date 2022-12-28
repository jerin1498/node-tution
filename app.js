const express = require("express");
const app = express();
const homeRouter = require("./router/home");
const userRouter = require("./router/user");
app.use(express.json());

// routers
app.use("/home", homeRouter);
app.use("/user", userRouter);

module.exports = app;

// 200 -- success
// 201 -- created
// 400 -- bad request error
// 401 -- not authorized
// 404 -- not found error
// 500 -- internal server error
