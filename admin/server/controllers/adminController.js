const Vendor = require('../models/Vendor');
const Listing = require('../models/Listing');
const Booking = require('../models/Booking');


// Dashboard Overview
exports.getDashboardData = async (req, res) => {
  try {
    const totalVendors = await Vendor.countDocuments();
    const totalListings = await Listing.countDocuments();
    const totalBookings = await Booking.countDocuments();
    
    const dashboardData = {
      totalVendors,
      totalListings,
      totalBookings,
    };

    res.json(dashboardData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Manage Vendors
exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.addVendor = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newVendor = new Vendor({ name, email, phone });
    await newVendor.save();
    res.json(newVendor);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteVendor = async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vendor deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
