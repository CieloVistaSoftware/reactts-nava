import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route for checking server status
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend server is running!' });
});

// Email route handler
const handleSendEmail = (req: Request, res: Response) => {
  try {
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

    // For now, just simulate a successful email send
    console.log('Email would be sent with:', { user_name, user_email, mobile, subject, message });
    
    // Return success response
    res.status(200).json({ 
      type: 'message', 
      text: `Hi ${user_name}, thank you for your email. We will get back to you soon.` 
    });
  } catch (error) {
    console.error('Error in send-email route:', error);
    res.status(500).json({ 
      type: 'error', 
      text: 'Could not process your request. Please try again later.' 
    });
  }
};

// Register the email route
app.post('/api/send-email', handleSendEmail);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
