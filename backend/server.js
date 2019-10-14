const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
const route = require('./routes/express-routes')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/JobPortal', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Database is connected')
  })
  .catch((err) => {
    console.log('Can not connect to the database ' + err.message)
  });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// setup server
const app = express();

// Set constiables
app.set('env', process.env.NODE_ENV || 'production')
const port = 4000
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/src/images')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', route);

// Start server
app.listen((process.env.PORT || port), () => {
  console.log('Server is running on Port: ', process.env.PORT || port);
});