import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const uri='mongodb://localhost:27017/udemy';
mongoose.connect(uri,options).then(
  ()=>{ console.log('conectado a mongoDB')},
  err=> {err}
)


const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// Rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
//consuma la carpeta public
app.use(express.static(path.join(__dirname, 'public'))); 


  



app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});