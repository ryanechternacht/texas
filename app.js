var texas = require('./texas'),
    _ = require('underscore');

var hand = _.first(texas.deck(), 7);
console.log(_.map(hand, texas.abbr));
console.log(texas.evaluate(hand));