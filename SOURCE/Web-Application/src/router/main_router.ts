import { Request, Response } from 'express';
import {getPage} from "./../GUI/controller/main_controller"

let express = require('express');
let router = express.Router();

// define the home page route
router.get('/', getPage);




// define the about route
router.get('/about', function(req:Request, res:Response) {
  res.send('About birds');
});

module.exports = router;