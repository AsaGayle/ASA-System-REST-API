const express = require('express');
const router = express.Router();

// Student Model
const Profile = require('../../models/Profile');

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get('/', (req, res) => {
    Profile.find()
    .then(profile => res.json(profile))
});

module.exports = router;