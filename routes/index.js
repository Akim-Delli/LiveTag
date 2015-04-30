var express = require('express');
var router = express.Router();
fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/ads', function(req, res, next) {
    pictureNumber = getRandomArbitrary(1, 12);
    var img = fs.readFileSync('./public/images/' + pictureNumber + '.jpeg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
});

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = router;
