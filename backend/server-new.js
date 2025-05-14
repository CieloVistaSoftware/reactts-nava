"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// A fresh new server.ts file with proper Express types
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '.env') });
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Test route for checking server status
app.get('/', (req, res) => {
    res.json({ message: 'Backend server is running!' });
});
// Email route handler
const handleSendEmail = (req, res) => {
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
    }
    catch (error) {
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
