'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Submission = require('./model/submissions');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

var mongoDB = 'mongodb://trevoraquino:melrose23@ds157653.mlab.com:57653/housingpreference';
mongoose.connect(mongoDB, {useMongoClient: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('build'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized'});
});

router.route('/submissions')
    .post(function(req, res) {
        var submission = new Submission();
        submission.name = req.body.name;
        submission.scores = req.body.scores;
        submission.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Submission added'});
        });
    });


app.use('/api', router);

app.listen(port, function() {
    console.log(`api running on port ${port}`);
});
