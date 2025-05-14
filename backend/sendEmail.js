"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv = __importStar(require("dotenv"));
// Load environment variables
dotenv.config();
// Create a router
const router = (0, express_1.Router)();
// Test endpoint
router.get('/test', (req, res) => {
    res.json({ message: 'Email API is working!' });
});
router.post('/send-email', async (req, res) => {
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
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
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
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ type: 'error', text: 'Could not send mail! Please check your mail configuration.' });
    }
});
exports.default = router;
