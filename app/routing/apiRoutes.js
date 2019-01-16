var express = require('express');
var router = express.Router();
var fs = require('fs');
// or var router = require('express').Router()

var responses = require('../data/friends')
var friendsData;

fs.readFile('./app/data/friends.js', 'utf8', function (err, data) {

    if (err) throw err;
    friendsData = JSON.parse(data.slice(17))
    // console.log(friendsData)

})

router.route('/friend')
    .get(function (req, res) {
        var friends = {
            'nome': 'rafael',
            'last': 'avila',
        }
        res.send(friends);
    })
    .post(function (req, res) {
        // converts all answers from string to integer
        //  newRecord ={};
        var body = req.body
        var newRecord = {
            name: body.name,
            photo: body.photo,
            scores: []
        }

        var friendIndex;

        function convertToInt(){
       
        body.scores.forEach((item, index) => {
            // console.log(item, index)
            newRecord.scores[index] = parseInt(item)
            // console.log(parseInt(item))
        });
        }

        function saveData() {
            var str = 'module.exports = ' + JSON.stringify(friendsData);

            fs.writeFile('./app/data/friends.js', str, function (err) {
                if (err) throw err;
                console.log('friendsData updated')
            })
        }

        function findFriends(){
           
            var friendScore = [];
            var bestMatchIndex = 0;
            var bestMatchScore = 100;

            friendsData.forEach((item, index)=>{
                var points = 0;
                for (let i = 0; i < 10; i++){
                    let n = item.scores[i]
                    let m = newRecord.scores[i]

                    points += (m > n) ? m - n : n - m;
                } 
                friendScore[index] = points

                if (points < bestMatchScore) {
                    bestMatchScore = points;
                    bestMatchIndex = index
                }

            })
            console.log(bestMatchIndex, bestMatchScore)
            return bestMatchScore
        }
        convertToInt();
        friendIndex = findFriends();

        friendsData.push(newRecord);
        saveData();
        

        console.log(friendsData)
        console.log(friendsData[friendIndex].name)

        res.send(newRecord);
    })



module.exports = router;