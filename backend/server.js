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
app.use(cors());

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
