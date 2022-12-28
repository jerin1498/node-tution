const express = require("express");
const userController = require("../contorller/user");

const router = express.Router();

router.get("/", userController.getUser);
router.post("/", userController.createUser);

module.exports = router;
