// taking a function f and binding it against one or more arguments 
// to produce a new function g with those arguments applied

Function.prototype.p = function() {
  // capture the bound arguments
  var args = Array.prototype.slice.call(arguments);
  var f = this;
  // construct a new function
  return function() {
    // prepend argument list with the closed arguments from above
    var inner_args = Array.prototype.slice.call(arguments);
    return f.apply(this, args.concat(inner_args))
  };
};

var plus_two = function(x,y) { return x+y; };
var add_three = plus_two.p(3);
add_three(4); // 7