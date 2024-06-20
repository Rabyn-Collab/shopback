import express from "express";
import { getProductById, getProducts, getTopProducts } from "../controllers/productController.js";


const router = express.Router();



const handleAll = (req, res) => {
  return res.status(405).json({ status: 'error', message: 'method not allowed' });
}


router.route('/')
  .get(getProducts).all(handleAll);

router.route('/top_products')
  .get(getTopProducts, getProducts).all(handleAll);
router.route('/:id')
  .get(getProductById).all(handleAll);


export default router;