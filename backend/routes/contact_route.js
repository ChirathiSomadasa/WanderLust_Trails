const express = require("express");
const Contact = require("../models/Contact"); // Import the Contact model

const router = express.Router();

// POST route to submit contact form data
router.post("/add", async (req, res) => {
  const { name, email, phone_number, subject, message } = req.body;

  try {
    // Validate required fields
    if (!name || !email || !phone_number || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      phone_number,
      subject,
      message,
    });

    // Save the contact data to the database
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (err) {
    // Handle any errors
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;