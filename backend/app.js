const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/door');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const mqttController = require('./controllers/mqttController');
mqttController.setup()

const mongoDB =
    'mongodb+srv://root:D380LkxgF2TpLiOc@cluster0.8fxnb.mongodb.net/Arbeidskrab?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
module.exports = app;
