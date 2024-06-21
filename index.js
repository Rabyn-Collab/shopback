import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const port = 5000;
const app = express();

const m = 90;




mongoose.connect('mongodb+srv://babynshrestha76:moles900@cluster0.guo1zjx.mongodb.net/Shopy').then((val) => {

  app.listen(port, () => {
    console.log('connected server is running');
  })
});

app.use(cors());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  // abortOnLimit: true
}));
app.use(express.json());
app.use(express.static('uploads'));






app.get('/', (req, res) => {


  return res.status(200).json({
    status: 'success',
    data: 'welcome to the backs jee'
  });
});




app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


