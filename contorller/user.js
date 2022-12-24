exports.getUser = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "user get call successfull",
    data: {
      name: "jerin",
    },
  });
};

exports.createUser = (req, res) => {
  return res.status(201).json({
    status: "success",
    message: "user created successfully",
    data: {
      user: "jerin",
    },
  });
};
