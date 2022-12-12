// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // add undefined and null later

  // if bool
    // return obj in quotes
  // if string
    // return obj in double quotes
  // if number
    // return obj in quotes
  // if array
    // declare string var
    // concatenate string with single bracket
    // forEach to visit each element
      // add each to the string, then comma
    // copy slice string 0 to -1
    // add ending bracket
    // return string copy
  // if object
    // declare string var
    // opening curly brace
    // for in loop to visit each
      // stringifyJSON.key + stringifyJSON.object[key], then comma
    // copy slice string 0 -1
    // add ending curly br

};