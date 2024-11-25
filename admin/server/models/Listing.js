const mongoose = require('mongoose');

const ListingSchema = mongoose.Schema({
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
});

module.exports = mongoose.model('Listing', ListingSchema);
