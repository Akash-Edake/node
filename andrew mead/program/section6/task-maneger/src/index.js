const express = require("express");
require("./db/mongoose");
const Users = require("./models/users");
const contactInfo = require("./models/contact");
const userRouter = require("./routers/users")
const contactRouter = require("./routers/contact")

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(userRouter)
app.use(contactRouter)
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});






