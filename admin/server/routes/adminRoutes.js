const express = require('express');
const router = express.Router();

// Controllers
const { getVendors, addVendor, updateVendor } = require('../controllers/vendorController');
const { getListings, updateListing } = require('../controllers/listingController');

// Middleware
// const protect = require('../middleware/authMiddleware');
const { protectAdminRoute } = require('../middleware/authMiddleware');

// Vendor Routes
router.get('/vendors', protectAdminRoute, getVendors);    // Get list of vendors
router.post('/vendors', protectAdminRoute, addVendor);    // Add a new vendor
router.put('/vendors/:id', protectAdminRoute, updateVendor); // Update a specific vendor

// Listing Routes
router.get('/listings', protectAdminRoute, getListings);    // Get list of listings
router.put('/listings/:id', protectAdminRoute, updateListing); // Update a specific listing

module.exports = router;
