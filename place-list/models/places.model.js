const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placesSchema = new Schema({
    name: String,
    visited: Boolean,
});

const Places = mongoose.model('Place', placesSchema);

module.exports = Places;