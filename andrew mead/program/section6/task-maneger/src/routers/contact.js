const express = require("express")
const router = express.Router()
const contactInfo = require("../models/contact")


router.post("/contactInfo", async (req, res) => {
    const contact = new contactInfo(req.body);
  
    try {
      await contact.save();
      res.status(201).send(contact);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  module.exports= router