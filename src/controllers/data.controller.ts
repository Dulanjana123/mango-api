import { Request, Response } from "express";
import { getPaginatedData } from "../services/data.service";

export const getData = (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const filter = (req.query.filter as string) || "";

  const data = getPaginatedData(page, limit, filter);
  res.status(200).json(data);
};
