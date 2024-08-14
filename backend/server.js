const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./components/db.js');
const reservationRoutes = require('./components/reservationRoutes.js');
const subscriptionRoutes = require('./components/subscriptionRoutes.js');

dotenv.config();
connectDB();

const app = express();

// Apply CORS middleware
app.use(cors({
    origin: "https://coffee-shoop.vercel.app",
    methods: ["POST"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to check the token
app.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(403); // Forbidden
    }

    // Validate the token here if needed
    // Example: if (token !== process.env.MY_API_TOKEN) return res.sendStatus(403);
    
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running ...");
});

app.use('/api/subscription', subscriptionRoutes);
app.use('/api/table', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
