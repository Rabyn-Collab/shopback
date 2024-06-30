import express from "express";
import { addOrder, getAllOrders, getOrderById, getOrderByUser } from "../controllers/orderController.js";
import { handleAll } from "../utils/commons.js";
import { adminCheck, userCheck } from "../middleware/checkUser.js";


const router = express.Router();


router.route('/')
  .get(userCheck, adminCheck, getAllOrders).post(userCheck, addOrder).all(handleAll);

router.route('/user')
  .get(userCheck, getOrderByUser).all(handleAll);

router.route('/:id')
  .get(userCheck, getOrderById).all(handleAll);

export default router;