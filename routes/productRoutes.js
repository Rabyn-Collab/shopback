import express from "express";
import { getProducts } from "../controllers/productController.js";


const router = express.Router();



const handleAll = (req, res) => {
  return res.status(405).json({ status: 'error', message: 'method not allowed' });
}


router.route('/')
  .get(getProducts).all(handleAll);

export default router;