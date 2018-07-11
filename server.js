const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

const app = express();

app.use(morgan('dev'));

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './client/build/')));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nytreact");

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log('App listening on ' + PORT);
});




