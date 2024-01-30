function deepEqual(x, y) {
  if (x === y) { 
    return true;
  } else if ( (typeof x === 'object' && x != null) && (typeof y === 'object' && y != null) ) {
    for (let px in x) {
        if (y.hasOwnProperty(px)) {
          if (!deepEqual(x[px], y[px])) return false;
        } else {
          return false;
        }
    }
    return true;
  } else {
    return false
  }
}

// tests
let obj = {
  here: {
    is: "an"
  }, 
  object: 2
};

console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
