exports._check = (x,y) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  const isNumber = (x) => {
    if(typeof x === 'number') return true;
    else throw new TypeError(`${x} is not a number`);
  }
  return (isNumber(x) && isNumber(y));
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
  exports._check(x,y);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x,y);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x,y);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x,y);
  return x / y;
};

module.exports = exports;
