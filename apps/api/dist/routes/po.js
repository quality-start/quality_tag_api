"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const poService_1 = require("../services/poService");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    const { order_no, brand_name, include_sent } = req.query;
    if (order_no) {
        const detail = (0, poService_1.getPODetail)(order_no);
        res.json(detail);
    }
    else {
        const brand = brand_name || "";
        const includeSent = include_sent === "true";
        const poList = (0, poService_1.getPOList)(brand, includeSent);
        res.json(poList);
    }
});
exports.default = router;
