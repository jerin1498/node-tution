const User = require("../model/user");

exports.getUser = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({
    status: "success",
    message: "user get call successfull",
    data: {
      users,
    },
  });
};

exports.createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    return res.status(201).json({
      status: "success",
      message: "user created successfully",
      data: {
        user,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  return res.status(200).json({
    status: "success",
    message: "user get call successfull",
    data: {
      user,
    },
  });
};
