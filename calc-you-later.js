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
const num1 = process.argv[2];
const operator = process.argv.slice(3, process.argv.length - 1).join(" ");
const num2 = process.argv[process.argv.length-1];

if(num1 == "" || num2 == "" || operator == "") {
	console.log("Usage: " + process.argv[1] + " <number1> <number2> <operation>");
	return;
} else if(isNaN(num1) || isNaN(num2)) {
	console.log("Must use valid numbers.");
	return;
}

//As a stretch goal--done after everything else works!--the code below reassigns
// the second number and operation variables to the values held in alternate
// process.argv indices.

// This is to allow for someone to type in two words for operations, like
// "divided by" or "subtracted from". Those two-word operations are
// space-separated, which means node reads them in as separate strings. We first
// have to detect whether those extra strings are in there, though! Several ways
// to do this.

// And we can't forget to put the space back in our two-word operation, as that's how calculate is expecting to receive it!


// Store the return value of our calculate function, making sure to feed it the correct values from our user input.
const answer = calculate(num1, num2, operator);

// Then, print out that return value to the terminal.
console.log("Answer is: " + answer);