import path from 'path';


const supports = ['.png', '.jpg', '.jpeg'];

export const fileCheck = (req, res, next) => {
  const file = req.files.image;
  try {
    if (file) {
      const val = path.extname(file.name);
      if (!supports.includes(val)) return res.status(400).json({
        status: 'error',
        message: 'please provide vaild image'
      });
      file.mv(`./uploads/${file.name}`, (err) => {
        console.log(err);
      });

      next();
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'please provide vaild image'
      });
    }



  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}