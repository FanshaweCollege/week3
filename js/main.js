(function () {
	"use strict";
	console.log("file connected");

// Single line comment
/* Multi
Line
Comment*/

var words = "This is a string of letters";

var num = 1;

console.log(words);
console.log("Number of times of visited "+num);
var teams = ["Knights", "Caps", "Leafs"];
console.log(teams [0]); //1st position of an array is 0

function i_am_a_function(){
	console.log("From i_am_a_function()");
}

window.addEventListener("load", i_am_a_function, false);


}) ()