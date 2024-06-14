import User from "../models/User.js";



export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });

    if (isExist) {
      return res.status(200).json({
        status: 'success',
        data: isExist
      });
    }
    return res.status(401).json({
      status: 'error',
      message: 'invalid credential'
    });

  } catch (err) {
    return res.status(400).json(`${err}`);
  }


}


export const userSignUp = async (req, res) => {
  const { email } = req.body;

  try {
    const isExist = await User.findOne({ email: email });

    if (isExist) return res.status(400).json({ status: 'error', message: 'user already exist' });
    await User.create(req.body);
    return res.status(201).json({ status: 'success', message: 'successfully registered' });
  } catch (err) {
    return res.status(400).json(`${err}`);
  }


}