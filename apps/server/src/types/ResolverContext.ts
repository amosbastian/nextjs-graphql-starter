import { Request, Response } from "express";

export interface ResolverContext {
  req: Request;
  res: Response;
}
