const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }, // pending, approved, canceled
});

module.exports = mongoose.model('Booking', BookingSchema);
