const mongoose = require("mongoose");
const validator = require("validator");

const schema = {
  name: { type: String },
  email: {
    type: String,
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
      }else if(this.age < 18 ){
        throw new Error("Age!>18");
      }
    },
  },
};

const User = mongoose.model(
  "User", //! collection name is users  !user
  schema
);

module.exports = User