const express = require("express");
const homeRouter = require("../contorller/home");

const router = express.Router();

router.get("/", homeRouter.landingPage);

const functionOne = (req, res, next) => {
  return res.send("some data from home");
};

const middleWareOne = (req, res, next) => {
  console.log("calling middleware ------>");
  return next();
};

const middleWareTwo = (req, res, next) => {
  console.log("calling middleware Two ------>");
  return next();
};

router.get("/data", middleWareOne, middleWareTwo, functionOne);

module.exports = router;
