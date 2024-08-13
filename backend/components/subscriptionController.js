
const asyncHandler = require("express-async-handler");
const Subscription = require("./subscriptionModel.js");


const newSubscription = asyncHandler(async (req, res) => {
  const {
    email,
  } = req.body;
  const reserve = await Subscription.create({
    email,
  });
  if (reserve) {
    res.status(201).json({
      email: reserve.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = {
    newSubscription,
};