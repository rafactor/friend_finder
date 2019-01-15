
var express = require('express');
var router = express.Router();
var fs = require('fs');
// or var router = require('express').Router()

var responses = require('../data/friends')
var friendsData;

fs.readFile('./app/data/friends.js','utf8',function(err, data){

    if (err) throw err;
    friendsData = JSON.parse(data.slice(17))  

  
})

router.route('/friend')
    .get(function(req, res) {
    console.log('apis')
    var friends = {
        'nome':'rafael',
        'last':'avila',
    }
    res.send(friends);
    })
    .post(function(req, res){
        console.log('test')
        // console.log(friendsData)

        console.log(req.body)
        // res.send(friendsData);
    })



module.exports = router;