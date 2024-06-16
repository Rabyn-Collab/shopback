import Product from "../models/Product.js";




export const getProducts = async (req, res) => {
  const objFields = ['sort', 'search', 'fields', 'page', 'limit'];
  try {

    const queryObject = { ...req.query };

    objFields.forEach((ele) => delete queryObject[ele]);
    console.log(queryObject);
    let query = Product.find(queryObject);


    if (req.query.sort) {
      const sorts = req.query.sort.split(',').join(' ');
      query = query.select(sorts);
    }

    if (req.query.fields) {

      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }


    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * 10;
    query = query.skip(skip).limit(limit);

    const products = await query;


    return res.status(200).json({
      status: 'success',
      length: products.length,
      data: products
    });

  } catch (err) {
    return res.status(400).json({ status: 'error', message: `${err}` });
  }
}