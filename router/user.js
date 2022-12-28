const express = require("express");
const userController = require("../contorller/user");

const router = express.Router();

router.get("/", userController.getUser); // get a user
router.post("/", userController.createUser); // create a user

module.exports = router;
