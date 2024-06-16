import Product from "../models/Product.js";




export const getProducts = (req, res) => {
  try {


  } catch (err) {
    return res.status(400).json({ status: error, message: `${err}` })
  }
}