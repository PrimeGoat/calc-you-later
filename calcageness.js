// Grab the calculate function from our other file. Imports can be tricky at first, so this one's a gimme!
const calculate = require('./calculate')


// For the following steps, write the code, like the example above, DIRECTLY
// below the comment that describes it.

// That way our comments will describe what the code right under it does.
// Thus providing documentation for future readers. Including yourself!


// Grab the three user inputs from the command line. They'll be in a special
// array that the node environment gives us, called "process.argv".

// Arrays are like strings, in that they have something stored at each index.
// But unlike arrays, they don't store single-character strings--instead, they
// can store anything of any length!

// In process.argv's case, they store the strings the user types in. The tricky
// thing is that process.argv[0] returns the first thing the user types in,
// which is always "node". Similarly, process.argv[1] returns the second thing
// the user typed, which is the name of the file they wanted to run with node.
// So if we want to get the commands the user wants US to run, those strings
// start at index 2.

// Put the two numbers and the operation into variables so we can feed them into
// our calculate function. We can decide what order the user inputs go in by
// storing the approprate pair of them as the numbers, and the other one as the
// operation. By far the most user-friendly way to store them is to assume
// they're in [number] [operation] [number] order, as in:
// 5 + 5
// 6 minus 4
// 10 X 5

// Here we store what's in those process.argv indices in well-named variables.

// Validate input
if(process.argv[2] == "") {
	console.log("Usage: " + process.argv[1] + " <number1> <operation> <number2>");
	return;
}
if(isNaN(process.argv[2])) {
	console.log("Input must start with a number.");
	return;
}

// Prepare vars
let sofar = 0;
let operator = "+";
let wasNum = 0;
let out = [];
let lastMD = "";

// First pass: Deal with mult, div, mod
for(let i = 2; i < process.argv.length; i++) {
	if(!isNaN(process.argv[i])) {
		if(wasNum) {
			console.log("Invalid syntax: two numbers without operator in between.");
			return;
		}

		if(isMD(operator.trim())) {
			sofar = calculate(sofar, process.argv[i], operator.trim());
			lastMD = operator.trim();
			if(lastMD != "") {
				out[out.length-2] = '+';
				out[out.length-1] = sofar;
			} else {
				out.push('+');
				out.push(sofar);
			}
			operator = '';
		} else {
			lastMD = "";
			out.push(operator);
			out.push(process.argv[i]);
			sofar = process.argv[i];
		}
		wasNum = 1;
	} else {
		if(wasNum) {
			operator = "";
		}
		operator += " " + process.argv[i];		
		wasNum = 0;
	}
	
}

console.log(out);

// Set up vars again
out.shift();

sofar = 0;
operator = "+";
wasNum = 0;

// Second pass: deal with add, sub
for(let i = 0; i < out.length; i++) {
	if(!isNaN(out[i])) {
		if(wasNum) {
			console.log("Invalid syntax: two numbers without operator in between.");
			return;
		}
		sofar = calculate(sofar, out[i], operator.trim());
		wasNum = 1;
		operator = '';
	} else {
		if(wasNum) {
			operator = "";
		}
		operator += " " + out[i];
		wasNum = 0;
	}
}

// Checks if an operator is first in order of operations mult, div, mod
function isMD(operator) {
	switch(operator) {
	case '*':
	case 'x':
	case 'X':
	case 'multiply':
	case 'times':
	case 'multiplied by':
	case '/':
	case 'divide':
	case 'divided by':
	case '%':
	case 'mod':
	case 'modulus':
		return true;
	default:
		return false;
	}
}

console.log("Answer is: " + sofar);