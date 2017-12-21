var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies =

[{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}]
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.send(candies);
});


router.get('/:id', function(req, res) {
	res.send(candies[req.params.id-1]);
});
// Fill out the rest of the routes here

router.post('/', function(req, res) {
	// CREATE
	candies.push(req.body);
	// console.log(req.body);
	res.send(req.body);
});

router.put('/:id', function(req, res) {
	// UPDATE//
	candies[req.params.id-1] = req.body;
	res.send(req.body);
});

router.delete('/:id', function(req, res) {
	// DELETE
	candies.splice(req.params.id-1, 1);
	res.send(req.body);
});
module.exports = router;