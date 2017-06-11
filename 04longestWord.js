// Find the Longest Word in a String 
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:


function findLongestWord(str) {
	// I want to use reduce - going though entire array and returning single value
	// 1. conver to array using split
	 return str.split(' ').reduce(function(a, b){ 
	 	// super cool reduce function that takes two arguments, prev and next value
		return b.length > a ? b.length : a;
		// body...
	}, 0); 
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
