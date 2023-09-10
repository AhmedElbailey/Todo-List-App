const express = require('express');
const app = express();

const MONGODB_URL =
  'mongodb+srv://Ahmed_Adel:Ahmed_123456789@cluster0.trguitc.mongodb.net/todo-V2?retryWrites=true&w=majority';
/////////////////////////////////////////
// Input formats
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/////////////////////////////////////////
// Initial Endpoints
// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

/////////////////////////////////////////
// Endpoints
const todoRoutes = require('./routes/todo');
const authRoutes = require('./routes/auth');

app.use('/todo', todoRoutes);
app.use(authRoutes);

/////////////////////////////////////////
// MongoDB Coonection and Server
const mongoose = require('mongoose');
mongoose
  .connect(MONGODB_URL)
  .then(client => {
    app.listen(7000);
  })
  .catch(err => {
    console.log('connection error: ', err);
  });
