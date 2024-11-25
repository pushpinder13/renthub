const Vendor = require('../models/Vendor');

// Get all vendors
const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new vendor
const addVendor = async (req, res) => {
  const { name, email, phone } = req.body;

  const newVendor = new Vendor({
    name,
    email,
    phone,
  });

  try {
    await newVendor.save();
    res.status(201).json(newVendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Approve or block a vendor
const updateVendor = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const vendor = await Vendor.findByIdAndUpdate(id, { status }, { new: true });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getVendors, addVendor, updateVendor };
