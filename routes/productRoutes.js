import express from "express";
import { addProduct, getProductById, getProducts, getTopProducts } from "../controllers/productController.js";
import { fileCheck } from "../middleware/fileCheck.js";
import { adminCheck, userCheck } from "../middleware/checkUser.js";


const router = express.Router();



const handleAll = (req, res) => {
  return res.status(405).json({ status: 'error', message: 'method not allowed' });
}


router.route('/')
  .get(getProducts).post(userCheck, adminCheck, fileCheck, addProduct).all(handleAll);

router.route('/top_products')
  .get(getTopProducts, getProducts).all(handleAll);
router.route('/:id')
  .get(getProductById).all(handleAll);


export default router;