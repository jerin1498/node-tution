const express = require("express");
const app = express();
const userController = require("./contorller/user");

app.use(express.json());

app.get("/home", (req, res) => {
  return res.status(200).send("got data sddfsaohdfsdh");
});

app.post("/home", (req, res) => {
  console.log(req.body);
  return res.send("post data got");
});

app.get("/user", userController.getUser);

module.exports = app;

// 200 -- success
// 201 -- created
// 400 -- bad request error
// 401 -- not authorized
// 404 -- not found error
// 500 -- internal server error
