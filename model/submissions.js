'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubmissionsSchema = new Schema({
    name: String,
    scores: {
        cost: Number,
        proximityCampus: Number,
        proximityOther: Number,
        safety: Number,
        roomSpace: Number,
        livingSpace: Number
    }
});

module.exports = mongoose.model('Submission', SubmissionsSchema);
