import express from "express";
import { userLogin, userSignUp } from "../controllers/userController.js";
import Joi from 'joi';
import validator from 'express-joi-validation';

const router = express.Router();

const valid = validator.createValidator({});

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().max(20).min(6).required()
});


const handleAll = (req, res) => {
  return res.status(405).json({ status: 'error', message: 'method not allowed' });
}


router.route('/')
  .get(valid.body(userSchema), userLogin);

router.route('/login')
  .post(userLogin).all(handleAll);

router.route('/signup')
  .post(userSignUp).all(handleAll);


export default router;