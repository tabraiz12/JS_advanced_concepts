// Composition is an operation that produces a new function z by nesting functions f and g.
// You can think of it in this way: z(x) == f(g(x))

Function.prototype.c = function(g) {
  // preserve f
  var f = this;
  // construct function z
  return function() {
    var args = Array.prototype.slice.call(arguments);
    // when called, nest g's return in a call to f
    return f.call(this, g.apply(this, args));
  };
};

var greet = function(s) { return 'hi, ' + s; };
var exclaim = function(s) { return s + '!'; };
var excited_greeting = greet.c(exclaim);
excited_greeting('Pickman') // hi, Pickman!