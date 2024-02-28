import express, { Request, Response } from 'express';

import path from 'path';


const app = express();
const port = process.env.PORT || 3000;
var MAINROUTER = require('./router/main_router');
var Logger = require('./logger/logger');

// configure the views
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/GUI/views"));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


// Log all requests 
app.use(Logger.Logger);


app.use('/', MAINROUTER);

//app.get('/', (req: Request, res: Response) => {
//    res.send('Hello, TypeScript Express!');
//});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}. Please visit this side.`);
});