// Confirm the Ending 
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the 
// JavaScript substring methods instead.


function confirmEnding(str, target) {
	// use substr method to cut out the part of string using target
	// if that equals target, return true, otherwise return false
	// practicing shorter form here, but same could be written as:
	// if (str.substr(str.length - target.length) === target) {
	// 	return true;
	// } else {
	// 	return false;
	// };

	return str.substr(str.length - target.length) === target ? true : false;
}

console.log(confirmEnding("Open sesame", "pen"));

