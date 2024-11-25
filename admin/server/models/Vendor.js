const mongoose = require('mongoose');

const VendorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'active',
  },
});

module.exports = mongoose.model('Vendor', VendorSchema);
