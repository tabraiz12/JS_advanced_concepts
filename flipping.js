 // To perform a flip we take function f which takes parameters (a,b) and
 // construct a function g which takes parameters (b,a).
Function.prototype.f = function() {
  // preserve f
  var f = this;
  // construct g
  return function() {
    var args = Array.prototype.slice.call(arguments);
    // flip arguments when called
    return f.apply(this, args.reverse());
  };
};

var div = function(x,y) { return x / y; };
div(1, 2) // 0.5
div.f()(1,2) // 2