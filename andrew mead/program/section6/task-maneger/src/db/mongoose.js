const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-maneger-api");


// const me = new User({
//   name: "John Doe",
//   email: "akash@gmail.com",
//   age: 19,
//   password: "password123",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
