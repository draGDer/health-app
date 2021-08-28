import express = require("express");

const index:express.Router = express.Router();

index.get('/',(request, response) => {
  response.redirect('/user');
});

export default index;