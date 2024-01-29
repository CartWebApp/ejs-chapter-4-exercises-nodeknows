function deepEqual(value, reference) {
  if (value == null || reference == null) return null;

  if (value === reference) return true;

  if (typeof value === 'object') {
    for (const p in value) {

      let found = false;

      for (const p2 in reference) {

        if (p === p2) {
          found = true
          console.log('1: ' + p)
          console.log('2: ' + p2)
        }

        

        if (!found) {
          
          if ( (typeof p === 'object') && (typeof p2 === 'object') ) {
            found = deepEqual(p, p2)
          } 
          
        }

        //console.log(found)
        //console.log(p)
        //console.log(p2)

        if (!found) break;

      }

      console.log(p, found)

    }
  }

  return true
}

// tests
let obj = {
  here: {
    is: "an"
  }, 
  object: 2
};

// console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
