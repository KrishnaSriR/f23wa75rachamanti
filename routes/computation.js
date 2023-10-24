var express = require('express');
var router = express.Router();

/* GET Computation page. */
router.get('/', function(req, res, next) {
let x= req.query.x?req.query.x:Math.round(Math.random() * 100 + 1);
let y=Math.cos(x);
    res.send(`Math.cos() applied to ${x} is ${y}`);
});

module.exports = router;
