import * as express from "express";
declare global {
  namespace Express {
    interface Request {
      user?: string;
      userUrl: string;
      image: string;
    }
  }
}
