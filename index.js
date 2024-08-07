import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { createServer } from 'http';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { Server } from "socket.io";
const port = 5000;
const app = express();

const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
// const ns = [
//   { rat: 5, id: 1 },
//   { rat: 4, id: 2 },
//   { rat: 5, id: 3 },
//   { rat: 3, id: 4 },
// ];


// const total = ns.reduce((a, b) => a + b.rat, 0);

// const avg = total/ ns.length;





mongoose.connect('mongodb+srv://babynshrestha76:moles900@cluster0.guo1zjx.mongodb.net/Shopy').then((val) => {

  server.listen(port, () => {
    console.log('connected server is running');
  })
});

app.use(cors());
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

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (data) => {
    io.emit('message', `${socket.id}. ${data}`);
  })
});
