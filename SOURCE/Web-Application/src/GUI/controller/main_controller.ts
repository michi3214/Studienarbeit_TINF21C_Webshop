import { Request, Response } from 'express';


export function getPage(req:Request, res:Response) {
    
    res.render('main_view.pug');
  }
