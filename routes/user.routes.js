const express = require('express');
const UserController = require('./../controllers/users.controller');

const userController = new UserController(); 

const router = express.Router();


router.post('/adduser', userController.createUser)

module.exports = router;