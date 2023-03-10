const express = require('express');
const rateLimiter = require('express-rate-limiter');
const { register, login, updateUser } = require('../controllers/authController') 
const router = express.Router();
const authenticateUser = require('../middleware/auth')

const apiLimiter = rateLimiter({
windowMs: 15 * 60 * 1000, //15 minutes
max: 10,
message: 'Too many requests from this IP address, please try again in 15 minutes'
})
router.route("/register").post(apiLimiter,register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);


module.exports = router; 