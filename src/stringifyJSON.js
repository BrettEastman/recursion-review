// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // function edge case

  // if undefined
  if (obj === undefined) {
    return undefined;
  }
  // if bool
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number' || obj === null) {
    // return obj in quotes
    return '' + obj;
  }
  // if string
  if (typeof(obj) === 'string') {
    // return obj in double quotes
    return '"' + obj + '"';
  }
  // if array
  if (Array.isArray(obj)) {
    // declare string var
    // concatenate string with single bracket
    var string = '[';
    // forEach to visit each element
    obj.forEach(function(element) {
      // add each to the string, then comma
      string += stringifyJSON(element) + ',';
    });
    // copy slice string 0 to -1
    var copy = string.slice(0, -1);
    // add ending bracket
    copy += ']';
    // return string copy
    return copy;
  }
  // if object
  if (typeof(obj) === 'object' && !Array.isArray(obj)) {
    // declare string var
    // opening curly brace
    var string = '{';
    // for in loop to visit each
    for (var key in obj) {
      // stringifyJSON.key + stringifyJSON.object[key], then comma
      string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    // copy slice string 0 -1
    var copy = string.slice(0, -1);
    // add ending curly brace
    copy += '}';
    // return string var
    return copy;
  }
};