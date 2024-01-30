function range(start, end, step = 1) {
  let arr = [];
  for (let i = start; i != end; i+=step) {
    arr.push(i)
  }
  arr.push(end)
  return arr
}

function sum(arr) {
  let x = 0;
  arr.forEach(function(elem) {
    x += elem
  })
  return x
}



console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// → 55
