// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // object handler

  // '{"string":'4',"whatever":[]}

  // array handler


  // string handler
  var stringHandler = function(double) {
    // '"string"' => 'string'
    var lastElement = string.length - 1;
    if (string[0] === '"' && string[lastElement] === '"') {
      return string.slice(1, -1);
    }
  };
  // '["string","happy"]'
  // boolean handler
    // true => true
  var booleanHandler = function(boolean) {
    return boolean;
  }

  // number handler
  var numberHandler = function (number) {
    if (Number.isInteger(number) || Number.isFloat(number)) {
      return number;
    }
  };

  // null handler
  var nullHandler = function() {
    // 'null' => null

  };
};

