

const express = require('express');
const authRouter= express.Router();
const {Signup, Login, Logout, contactUs} = require('../controllers/user')



authRouter.post('/signup', Signup);

authRouter.post('/login', Login);

authRouter.post('/logout', Logout);

authRouter.post("/contactus", contactUs)


module.exports = authRouter;