const User = require("../model/user");

exports.getUser = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "user get call successfull",
    data: {
      name: "jerin",
    },
  });
};

exports.createUser = async (req, res) => {
  const { body } = req;
  const user = await User.create(body);
  return res.status(201).json({
    status: "success",
    message: "user created successfully",
    data: {
      user,
    },
  });
};
