var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
 array.unshift(`${element}`);
 return array.slice(1);
 //return array;
}
