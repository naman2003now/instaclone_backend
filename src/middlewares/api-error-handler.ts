import { Request, Response, NextFunction } from "express";
import ApiError from "../errors/api-error";

export default (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if ([0, "", [], null].includes(error)) {
    next();
    return;
  }
  if (error instanceof ApiError) {
    res.status(error.status).json(error.error);
  } else {
    res.status(500).json("Internal Server Error");
  }
};
