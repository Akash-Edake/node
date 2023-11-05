const mongoose = require("mongoose");
const validator = require("validator");

let schema = {
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 3,
    maxlength: 50,
    validate(value) {
      if (value.match(/[0-9]/g)) {
        throw new Error("not Number required");
      }
    },
  },
  number: {
    type: Number,
    required: [true, "number is required"],
    minlength: 10,
    maxlength: 12,
  },
};

const contactInfo = mongoose.model("contactInfo", schema);
module.exports = contactInfo;