function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

console.log(map(Math.round, [0.01, 2, 9.89, Math.PI]));