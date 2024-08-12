
const asyncHandler = require("express-async-handler");
const Reservation = require("./reservationModel.js");


const newReservation = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    date,
    time,
    person,
  } = req.body;
  const reserve = await Reservation.create({
    name,
    email,
    date,
    time,
    person,
  });
  if (reserve) {
    res.status(201).json({
      name: reserve.name,
      email: reserve.email,
      date: reserve.date,
      time: reserve.time,
      person: reserve.person,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = {
    newReservation,
};