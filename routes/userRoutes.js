import express from "express";
import { userLogin } from "../controllers/userController.js";
import Joi from 'joi';
import validator from 'express-joi-validation';

const router = express.Router();

const valid = validator.createValidator({});

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().max(20).min(6).required()
});


router.route('/')
  .get(valid.body(userSchema), userLogin);

router.route('/login')
  .post(valid.body(userSchema), userLogin).all((req, res) => {
    return res.status(405).json({ status: 'error', message: 'method not allowed' })
  });


export default router;