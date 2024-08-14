const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./components/db.js');
const reservationRoutes = require('./components/reservationRoutes.js');
const subscriptionRoutes = require('./components/subscriptionRoutes.js');

dotenv.config();
connectDB();

const app = express();

// Properly configure CORS
app.use(cors({
    origin: "https://coffee-shoop.vercel.app", // Allow your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
    credentials: true // If you need to send cookies with the requests
}));

app.options('*', cors()); // Handle preflight requests

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
