const express = require('express');
const router = express.Router();
const { loginUser } = require('./authController');

//Endpoint for user login
router.post('/login', loginUser);

module.exports = router;