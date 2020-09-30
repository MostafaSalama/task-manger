import {RequestHandler} from "express";

const testMiddleware:RequestHandler =(req, res, next) => {
    const cookie = req.signedCookies;
    console.log(cookie);
    next() ;
}
export default test ;
