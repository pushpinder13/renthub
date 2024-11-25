const Listing = require('../models/Listing');

// Get all listings
const getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate('vendor');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Approve or update a listing
const updateListing = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const listing = await Listing.findByIdAndUpdate(id, { status }, { new: true });
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getListings, updateListing };
