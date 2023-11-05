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

app.post("/users", (req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
app.post("/contactInfo", (req, res) => {
  const contact = new contactInfo(req.body);
  contact
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get("/users", (req, res) => {
  Users.find({})
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/user/:id", (req, res) => {
  const _id = req.params.id;
  Users.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
