import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const port = 5000;
const app = express();


// const ns = [
//   { rat: 5, id: 1 },
//   { rat: 4, id: 2 },
//   { rat: 5, id: 3 },
//   { rat: 3, id: 4 },
// ];


// const total = ns.reduce((a, b) => a + b.rat, 0);

// const avg = total/ ns.length;





mongoose.connect('mongodb+srv://babynshrestha76:moles900@cluster0.guo1zjx.mongodb.net/Shopy').then((val) => {

  app.listen(port, () => {
    console.log('connected server is running');
  })
});
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
app.use(cors({
  credentials: true,
  origin: "https://react-mongo-swart.vercel.app",
}));
app.use(morgan('dev'));
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  // abortOnLimit: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));






app.get('/', (req, res) => {


  return res.status(200).json({
    status: 'success',
    data: 'welcome to the backs jee'
  });
});




app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


