

const express = require('express');
const authRouter= express.Router();
const {Signup, Login, Logout} = require('../controllers/user')



authRouter.post('/signup', Signup);

authRouter.post('/login', Login);

authRouter.post('/logout', Logout);


module.exports = authRouter;