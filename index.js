var expert = require("./lib/expert.js");
    _ = require('underscore');

var {doe, sin, verb} = require('./config/knowledgeBase');

console.log("what has fur?");

var answer1 = verb.whatHas(sin.fur);

console.log(_.map( answer1, function(c){ return c.id; }));

console.log("what mammal that a mouse is smaller than, can swim?");

var answer2 = _.intersection( verb.example(sin.mammal),
                              verb.whatCan(sin.swim),
                              verb.smallerThan(doe.mouse) );

console.log(answer2)

console.log(_.map( answer2, function(c){ return c.id; }));