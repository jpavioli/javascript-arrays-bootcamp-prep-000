//Chocolate bar array
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

//add an element to the beginning of an array
function addElementToBeginningOfArray(array,element){
  return [element,...array]
}

//distructively add an element to the beginning of an array 
function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element)
}

// add an element to the end of an array
function addElementToEndOfArray(array,element){
  return [...array,element]
}

//destructively add element to the beginning of an array
function destructivelyAddElementTo