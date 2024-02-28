import express, { Request, Response } from 'express';

function Logger(req:Request, res:Response, next:Function) {
    console.log('Time: %d Requested URL: %s Method: %s', Date.now(), req.originalUrl, req.method);
    next();
}

module.exports = {
    Logger
}