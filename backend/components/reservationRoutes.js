
const express = require("express");
const router = express.Router();
const { newReservation } = require('./reservationController.js');

// Update the route path to match '/api/table'
router.route('/').post(newReservation);

module.exports = router;
