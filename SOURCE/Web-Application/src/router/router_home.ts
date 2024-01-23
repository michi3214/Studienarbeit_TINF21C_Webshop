import express, { Request, Response } from 'express';
const router = express.Router();

//Controller
const controllerHome = require("../controller/login.ts");

// routes
router.get("/", controllerHome.getPage);