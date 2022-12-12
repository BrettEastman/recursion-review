// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// I: class name
// o: Array list
// c
// e

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // declare var result array
  var resultArr = [];

  // declare inner function
  var innerFunction = function(element) {
    // determine base case: does element have classname
    if (element.classList.contains(className)) {
      // if so, push into result array
      resultArr.push(element);
    }
    // if element we are currently in has children elements that need to be searched
    if (element.hasChildNodes()) {
      element.children.forEach(function(child) {
        innerFunction(child);
      });
    }
  };
  // invoke inner function on document.body
  innerFunction(document.body);

  // return result array
  return resultArr;
};
