// const isRainy = true;

// if(isRainy){
//   console.log("Bring out Umbrella.");
// } else {
//   console.log("Will not bring out umbrella.");
// }

// If a block contains only a single line we do not actually need to enter another block. we can write it without any block.

// if (isRainy) console.log("Bring out umbrella");
// else console.log("will not bring out umbrella.");

// const isRainy = false;

// we can also write it using turnery operator.

// isRainy ? console.log("Bring out umbrella.") : console.log("will not bring out umbrella.");

// Use strict
// x = 10; //do not create scope

// console.log(x);

// const num = 0123;

// console.log(num);

//use strict is used to run the code perfectly so we do not face un necessary bugs and errors.

//function
//function is the most important factor in any programming language.

//Function is the combination of a lot of work. if we want to do a specific set of work in any work, function will be save the same work process and use it again and again to make our work much easier.

// const a = 10;
// const b = 5;

// const sum = a + b;
// const sumProduct = sum * 5;

// console.log(sumProduct)

//To be noted: The function result can be called before you write a function. that thing is called hoisting.

//Function declaration
// function greet(personName) {
//   const message = `Hello, ${personName}`;
//   return message;
// }

// console.log(greet("Roxanne"));
// console.log(greet("Simonna"));
// console.log(greet("Jina"));

// function doMath(a, b, c, d) {
//   const sum = a + b + c + d;
//   const diff = sum - d;
//   const prod = diff * a;

//   return prod;
// }

// console.log(doMath(1, 2, 3, 4));

//if the value of a variable is not found. it is declared as undefined and the result of a undefined number is nan.

//Function expression

// const colorExpressor = function (colorName) {
//   const message = `This is ${colorName}!`;

//   return message;
// };

// console.log(colorExpressor(Red));

//Arrow function

// const doMath = (num1, num2) => num1 % num2

// console.log(doMath(10, 2));

//the specialty of the arrow function is if it can be written in a single line we can cut down a lot of things just as shown in the function written above. lets do another example.

// const ageCalculator = (birthyear) => 2023 - birthyear;

// console.log(ageCalculator(2000));

//Function calling another function

// function cutTrees(tree) {
//   return tree * 4;
// }

// function makeFurniture(tree) {
//   return cutTrees(tree)
// }

// console.log(makeFurniture(5));

// Arrays
//Arrays is a place where multiple number of function are arranged in an organized manner.Anything can be written in the array.
const myNumbers = [5, 10, 15, 20, 25, 500];

console.log(myNumbers[5]);
//If no value is given in the defined position the array will show undefined massage.

//Access element

console.log(myNumbers.indexOf(10));



//Access index or position
console.log;
