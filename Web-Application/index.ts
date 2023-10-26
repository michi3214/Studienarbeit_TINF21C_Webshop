/**
 * This page includes the express logic. 
 */


import dotenv from "dotenv";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();



// Module to work with cookies
app.use(cookieParser());

// Load global config from .env file
dotenv.config();


app.get("/", (req, res) => {
	res.send("Hello World!");
});




let serverPort:number = 3000; 
if(process.env.SERVER_PORT !== undefined){
	serverPort = parseInt(process.env.SERVER_PORT);
}

app.listen(serverPort, console.log("Webshop Server has started at port " + serverPort));