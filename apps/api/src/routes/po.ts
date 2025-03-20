import express, { Request, Response } from "express";
import { getPOList, getPODetail } from "../services/poService";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const { order_no, brand_name, include_sent } = req.query;

  if (order_no) {
    const detail = getPODetail(order_no as string);
    res.json(detail);
  } else {
    const brand = (brand_name as string) || "";
    const includeSent = include_sent === "true";
    const poList = getPOList(brand, includeSent);
    res.json(poList);
  }
});

export default router;
