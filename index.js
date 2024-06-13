import express, { json } from 'express';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
const port = 5000;
const app = express();


mongoose.connect('mongodb+srv://babynshrestha76:moles900@cluster0.guo1zjx.mongodb.net/Shops').then((val) => {

  app.listen(port, () => {
    console.log('connected server is running');
  })
});


app.use(express.json());
app.use(express.static('uploads'));



app.get('/', (req, res) => {
  // console.log(req.body);
  console.log(req.query);
  return res.status(200).json({
    status: 'success',
    data: 'welcome to the backs jee'
  });
});




app.use('/api/users', userRoutes);





