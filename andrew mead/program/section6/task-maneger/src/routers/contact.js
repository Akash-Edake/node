const express = require("express");
const router = express.Router();
const contactInfo = require("../models/contact");

router.post("/contactInfo", async (req, res) => {
  const contact = new contactInfo(req.body);

  try {
    await contact.save();
    res.status(201).send(contact);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/contactInfo/:id", async (req, res) => {
  const keys = Object.keys(req.body);
  try{
    let updatedContact = await contactInfo.findById(req.params.id)
    keys.forEach(element=>updatedContact[element]=req.body[element])
    await updatedContact.save()

    if(!updatedContact){
        return res.status(404).json({message: "No Contact found"})
    }
    res.status(201).send(updatedContact)

  }catch (e){
    res.status(500).send(e)
  }
});
module.exports = router;
