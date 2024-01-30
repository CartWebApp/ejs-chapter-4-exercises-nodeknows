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


function prepend(list, elem) {
  for (let i = 0; i != list.length; i++) {
    console.log(i)
  }
}

function nth() {

}

function arrayToList(arr) {
  if (arr.length > 1) {
      
    var list = {}

    for (let i = 0; i != arr.length; i++) {
      cVal = arr[i];
      cRest = {value: arr[i]};
      cVal = cRest.value;
      cRest = cRest.rest
    }

  }

  console.log(list)
}

function listToArray(list, arr) {

}




console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
