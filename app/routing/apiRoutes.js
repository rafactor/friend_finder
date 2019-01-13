// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var express = require('express');
var router = express.Router();


router.route('/friend')
    .get(function(req, res) {
    console.log('apis')
    var friends = {
        'nome':'rafael',
        'last':'avila',
    }
    res.send(friends);
    // res.send('home page')
    })
    .post(function(req, res){
        res.send('post test')
    })

// router.post('/', function(req, res) {
//     res.send('POST handler for /dogs route.');
// });

module.exports = router;