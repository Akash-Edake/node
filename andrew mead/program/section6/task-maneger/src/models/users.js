const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Invalid Email");
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive");
      }
    },
  },
  password: {
    type: String,
    minlength: 6,
    maxLength: 15,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase() === "password") {
        throw new Error("Password is not correct && Age>18");
      } else if (this.age < 18) {
        throw new Error("Age!>18");
      }
    },
  },
});


//! findByCredentials custome created
schema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  let isValidated = await bcrypt.compare(password, user.password);
  if (!isValidated) {
    throw new Error("Incorrect Password");
  }
  return user;
};

schema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  console.log("just before saving!");
  next();
});
const User = mongoose.model(
  "User", //! collection name is users  !user
  schema
);

module.exports = User;
