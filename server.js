const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.listen(3001);

app.get('/', (req, res) => {
    Product.create({
        title: 'reactive native',
        description: 'test mongo db',
        url: 'https://www.google.com'
    })
    res.send("Hello world");
});