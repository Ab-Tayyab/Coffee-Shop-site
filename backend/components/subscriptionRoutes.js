
const express = require("express");
const router = express.Router();
const { newSubscription } = require('./subscriptionController.js');

// Update the route path to match '/api/table'
router.route('/').post(newSubscription);

module.exports = router;
