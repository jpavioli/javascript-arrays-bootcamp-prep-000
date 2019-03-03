//Chocolate bar array
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

//add an element to the beginning of an array
function addElementToBeginningOfArray(array,element){
  var array = [element,array]
  return array
}

function disturctivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}