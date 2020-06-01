import { Request, Response } from "express";

export interface CustomContext {
  req: Request;
  res: Response;
}
