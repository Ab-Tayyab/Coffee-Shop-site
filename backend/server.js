const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./components/db.js');
const reservationRoutes = require('./components/reservationRoutes.js');

dotenv.config();
connectDB();

const app = express();

// Apply CORS middleware with specific origin
app.use(cors({
    origin: 'https://coffee-shop-site-client.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running ...");
});

app.use('/api/table', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
