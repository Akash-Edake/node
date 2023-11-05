const express = require("express");
require("./db/mongoose");
const Users = require("./models/users");
const contactInfo = require("./models/contact");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.post("/users", async (req, res) => {
  const user = new Users(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.post("/contactInfo", async (req, res) => {
  const contact = new contactInfo(req.body);

  try {
    await contact.save();
    res.status(201).send(contact);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const usersFind = await Users.find({});
    res.status(200).send(usersFind);
  } catch (e) {
    res.status(500).send("Error");
  }
});

app.get("/user/:id",async (req, res) => {
  const _id = req.params.id;
  try {
    const findById = await Users.findById(_id);
    if (!findById) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(findById);
  } catch (e) {
    res.status(500).send("Server Error");
  }
});
