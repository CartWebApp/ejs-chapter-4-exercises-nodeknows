function reverseArray(arr) {
  let copy = [];
  if (arr.length < 2) return;
  for (let i = 0; i != arr.length; i++) {
    copy[arr.length-i-1] = arr[i]
  }
  return copy
}

function reverseArrayInPlace(arr) {
  arrayValue = reverseArray(arr);
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);

console.log(arrayValue);
// → [5, 4, 3, 2, 1]