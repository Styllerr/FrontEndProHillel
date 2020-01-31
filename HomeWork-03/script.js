var firstArray = [];
var secondArray = ["awesome", "second"];
firstArray.push(prompt("Enter first sentence"));
firstArray.push(prompt("Enter second sentence"));
firstArray.push(prompt("Enter third sentence"));
firstArray = firstArray.concat(secondArray);
var result = firstArray.join("");
alert(`Total number of characters in the final array: ${result.length}`);