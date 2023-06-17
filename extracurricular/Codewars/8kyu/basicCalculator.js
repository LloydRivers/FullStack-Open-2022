var calculate = function (a, o, b) {
  var result = 0;

  if (o === "+") {
    return a + b;
  } else if (o === "-") {
    return a - b;
  } else if (o === "/" && b !== 0) {
    return a / b;
  } else if (o === "*") {
    return a * b;
  } else {
    return null;
  }
};
