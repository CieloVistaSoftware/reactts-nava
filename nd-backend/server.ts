import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sendEmailRouter from './sendEmail';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', sendEmailRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});