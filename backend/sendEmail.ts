import express, { Request, Response, Router } from 'express';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create a router
const router = Router();

// Test endpoint
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Email API is working!' });
});

router.post('/send-email', async (req: Request, res: Response) => {
  const { user_name, user_email, mobile, subject, message } = req.body;

  // Validate input
  if (!user_name || user_name.length < 4) {
    return res.status(400).json({ type: 'error', text: 'Name is too short or empty!' });
  }
  if (!user_email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(user_email)) {
    return res.status(400).json({ type: 'error', text: 'Please enter a valid email!' });
  }
  if (!message || message.length < 10) {
    return res.status(400).json({ type: 'error', text: 'Message is too short or empty!' });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', 
        pass: process.env.EMAIL_PASS || 'your-email-password',
      },
    });

    // Email options
    const mailOptions = {
      from: user_email,
      to: process.env.EMAIL_TO || 'support@idrivenglobal.com',
      subject: `New Enquiry For IDG: ${subject}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ type: 'message', text: `Hi ${user_name}, thank you for your email. We will get back to you soon.` });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ type: 'error', text: 'Could not send mail! Please check your mail configuration.' });
  }
});

export default router;