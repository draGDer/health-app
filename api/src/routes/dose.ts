import express = require("express");
import doseController from '../controllers/dosecontroller';
import asyncMiddleware from "../middleware/asyncErrorMiddleware";

const dose:express.Router = express.Router();
dose.get('/list', asyncMiddleware(doseController.list));
dose.post('/register', asyncMiddleware(doseController.register));
// dose.get('/:id', doseController.getdose);
dose.post('/check', doseController.check);
export default dose;