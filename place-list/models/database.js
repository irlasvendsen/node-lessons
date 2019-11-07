const moongoose = require('mongoose');

moongoose.connect('mongodb://localhost:27017/place', {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex:true});

module.exports = moongoose;
