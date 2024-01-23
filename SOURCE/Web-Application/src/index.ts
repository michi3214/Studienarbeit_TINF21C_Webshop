import express, { Request, Response } from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 3000;


// configure the views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


//Routes
app.use("/", require(path.join(__dirname, "router", "router_home")));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });