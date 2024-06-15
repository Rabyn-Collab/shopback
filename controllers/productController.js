import Product from "../models/Product.js";




export const getProducts = async (req, res) => {

  try {
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    let query = Product.find(queryObj);

    if (req.query.sort) {
      const sort = req.query.sort.split(',').join(' ');
      query = query.sort(sort);
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
    return res.status(200).json(products);

  } catch (err) {
    return res.status(400).json(`${err}`);
  }


}

