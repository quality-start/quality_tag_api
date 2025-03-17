import express, { Request, Response } from "express";
import { getPOList, getPODetail } from "../services/poService";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const { order_no, brand_name, include_sent } = req.query;

  if (order_no) {
    // PO詳細取得ロジック
    const detail = getPODetail(order_no as string);
    res.json(detail);
  } else {
    // brand_name または include_sent が未指定の場合のデフォルト値
    const brand = (brand_name as string) || "";
    const includeSent = include_sent === "true";

    // PO一覧取得ロジック
    const poList = getPOList(brand, includeSent);
    res.json(poList);
  }
});

export default router;
