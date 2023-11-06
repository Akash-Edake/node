const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
let schema = new mongoose.Schema({
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
    unique : true,
    required: [true, "number is required"],
    minlength: 10,
    maxlength: 12,
  },
});

schema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("name")) {
    user.name = await bcrypt.hash(user.name, 8);
  }
  console.log("just before saving!");
  next();
});
const contactInfo = mongoose.model("contactInfo", schema);
module.exports = contactInfo;
