const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://10.157.138.65:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);

