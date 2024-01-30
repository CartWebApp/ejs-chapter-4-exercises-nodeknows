/*

function arrayToList 
- builds up a list structure like the one shown when given [1, 2, 3] as argument.

function listToArray 
- produces an array from a list.

function prepend
- takes an element & a list
- creates a new list 
- adds the element to the front of the input list

function nth
- takes a list and a number
- returns the element at the given position in the list (with zero referring to the first element)
- undefined when there is no such element.

*/


function prepend(elem, list) { // return new list
  let arr = listToArray(list);
  if (arr.length > 1) {
    for (let i = 0; i != arr.length; i++) {
      arr[i + 1] = arr[i]
    }
  } else if (arr.length == 1) {
    arr[1] = arr[0]
  }
  arr[0] = elem;
  return arrayToList(arr)
}

function nth(list, x) { // return #
  return listToArray(list)[x]
}

function arrayToList(arr) {
  if (arr.length >= 1) {
    var list = {}
    let cList = list;
    for (let i = 0; i != arr.length; i++) {
      cList.value = arr[i];
      cList.rest = { value: arr[i + 1] };
      cList = cList.rest;
    }
  }
  return list
}

function listToArray(list) {
  let arr = [];
  let isP, cList = list;
  do {
    if (!cList || !cList.value) break;
    arr.push(cList.value);
    cList = cList.rest
    isP = true;
  } while (isP);
  return arr
}




console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
