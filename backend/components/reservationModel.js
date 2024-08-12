
const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        person: {
            type: Number,
            required: true,
        }
    }, {
        timestamps: true,
    }
);



const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;