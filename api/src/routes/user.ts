import express = require("express");
import userController from '../controllers/usercontroller';

const user:express.Router = express.Router();
user.get('/list', userController.list);
user.post('/register', userController.register);
user.get('/:id', userController.getUser);
export default user;