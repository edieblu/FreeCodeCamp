// Chunky Monkey 
// Write a function that splits an array (first argument) into groups 
// the length of size (second argument) and returns them as a two-dimensional array.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function chunkArrayInGroups(arr, size) {
	var newArray = [];
  while (arr.length > 0){
  	newArray.push(arr.splice(0,size));
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
