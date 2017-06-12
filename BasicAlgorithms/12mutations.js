// Mutations 
// Return true if the string in the first element of the array contains all of 
// the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string 
// "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters 
// in "line" are present in "Alien".


function mutation(arr) {
	var word1 = arr[0].split('');
	var word2 = arr[1].split('');
	// we want to filter our letters that are in word2, but not word1
	var charIn = function(char) {
		if (word1.indexOf(char) === null && word2.indexOf(char) !== null) {
			return char;
		} else {
			return false;
		}
	}
	return arr.filter(charIn);
}

console.log(mutation(["hello", "hey"]));
