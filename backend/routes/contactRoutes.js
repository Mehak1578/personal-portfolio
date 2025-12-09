import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact - Create new contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and message' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      message
    });

    // Save to database
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: contact
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

export default router;
