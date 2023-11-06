const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.get("/users", async (req, res) => {
  try {
    const usersFind = await Users.find({});
    res.status(200).send(usersFind);
  } catch (e) {
    res.status(500).send("Error");
  }
});

router.get("/user/:id", async (req, res) => {
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

router.post("/users", async (req, res) => {
  const user = new Users(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/user/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid operation!" });
  }
  try {
    const updateUser = await Users.findById(req.params.id)
    updates.forEach(element => updateUser[element]=req.body[element]);
    await updateUser.save()
    // const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!updateUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(updateUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const removeContact = await Users.findByIdAndDelete(req.params.id);
    if (!removeContact) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(removeContact);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
