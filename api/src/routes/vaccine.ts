import express = require("express");
import vaccineController from '../controllers/vaccinecontroller';

const vaccine:express.Router = express.Router();
vaccine.get('/list', vaccineController.list);
vaccine.post('/register', vaccineController.register);
vaccine.get('/:id', vaccineController.getvaccine);
export default vaccine;