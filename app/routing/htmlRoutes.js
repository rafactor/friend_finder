var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../..', "app", "public", 'home.html'));
});

router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../..', "app", "public", 'survey.html'));
});

router.get('/:variable', function(req, res) {
    res.sendFile(path.join(__dirname, '../..', "app", "public", 'home.html'));
});



module.exports = router;