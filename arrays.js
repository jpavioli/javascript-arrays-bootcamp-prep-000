//Chocolate bar array
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

//add an element to the beginning of an array
function addElementToBeginningOfArray(array,element){
  var array2 = [element,...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}