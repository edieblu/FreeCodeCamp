// Slasher Flick 
// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
