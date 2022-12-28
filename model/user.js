const mongoose = require("mongoose");

const usetSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "firstName field is must"],
    maxlength: [15, "maximum char exceed"],
    minlingth: [1, "minumun one char is requered"],
  },
  lastName: {
    type: String,
    maxlength: [15, "maximum char exceed"],
  },
  email: {
    type: String,
    required: [true, "email field is must"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  password: {
    type: String,
    required: [true, "password field is must"],
  },
  mobileNumber: Number,
  dateOfBirth: Date,
});

const User = mongoose.model("User", usetSchema);

module.exports = User;
