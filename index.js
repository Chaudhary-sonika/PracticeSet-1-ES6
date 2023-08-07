// Q1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

// Your ES6 code here
// const isEligibleToVote = (age) => {
//   if (age >= 18) {
//     return "Eligible to vote";
//   } else {
//     return "Not eligible to vote";
//   }
// };

// console.log(isEligibleToVote(20)); // Eligible to vote
// console.log(isEligibleToVote(18)); // Eligible to vote
// console.log(isEligibleToVote(17)); // Not eligible to vote

// Q2. Write a function that takes two numbers as input and determines which one is greater.
// Your ES6 code here
// const isGreater = (a, b) => {
//   if (a > b) {
//     return `${a} is greater than ${b}`;
//   } else {
//     return `${b} is greater than ${a}`;
//   }
// };
// console.log(isGreater(2, 5)); // 5 is greater than 2
// console.log(isGreater(10, 5)); // 10 is greater than 5

// Q3. Write a function that takes a number as input and determines if it is positive or negative

// Your ES6 code here
// const checkNum = (a) => {
//   if (a > 0) {
//     return "Positive Number";
//   } else {
//     return "Negative Number";
//   }
// };
// console.log(checkNum(9)); // Positive Number
// console.log(checkNum(-8)); // Negative Number
// console.log(checkNum(22)); // Positive Number

// Q4. Write a function that takes a number as input and determines if it is even or odd.

// Your ES6 code here
// const isEvenOdd = (a) => {
//   const num = a % 2;
//   if (num === 0) {
//     return "Number is even ";
//   } else {
//     return "Number is odd";
//   }
// };
// console.log(isEvenOdd(5)); // Odd Number
// console.log(isEvenOdd(8)); // Even Number
// console.log(isEvenOdd(10)); // Even Number

// Q5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// Your ES6 code here
// const checkForAlphabetA = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       return "Includes a";
//     }
//   }
//   return "does not includes a";
// };
// console.log(checkForAlphabetA("Tanay")); // Includes a
// console.log(checkForAlphabetA("Jeep")); // Does not include a
// console.log(checkForAlphabetA("Jane")); // Includes a

// Q6. Write a function that takes a string as input and determines if it is longer than 5 characters.

// Your ES6 code here
// const checkLength = (str) => {
//   if (str.length > 5) {
//     return "more than 5 characters";
//   } else {
//     return "Less trhan 5 characters";
//   }
// };
// console.log(checkLength("Programming")); // more than 5 characters
// console.log(checkLength("Jeep")); // less than 5 characters

// Q7. Write a function that takes a number as input and determines if it is between 1 and 10.

// Your ES6 Code here
// const isBetweenOneAndTen = (a) => 1 < a && a < 10;
// console.log(isBetweenOneAndTen(5)); // true
// console.log(isBetweenOneAndTen(11)); // false

// Q8. Write a function that takes a string as input and determines if it contains the word "hello".

// Your ES6 code here
// const isHelloPresent = (str) => {
//   let Hello = "hello";
//   for (let i = 0; i <= str.length - Hello.length; i++) {
//     let j = 0;
//     while (
//       j < Hello.length &&
//       str[i + j].toLowerCase() === Hello[j].toLowerCase()
//     ) {
//       j++;
//     }
//     if (j === Hello.length) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isHelloPresent("Hello World")); // true
// console.log(isHelloPresent("World")); // false

// Q9. Write a function that takes a number as input and determines if it is a multiple of 3

// Your ES6 code here
// const isMultipleOfThree = (num) => num % 3 === 0;
// console.log(isMultipleOfThree(5)); // false
// console.log(isMultipleOfThree(9)); // true

// Q10. Write a function which takes in a number as input and returns it after multiplying by 10.

// Your ES6 code here
// const multiplyByTen = (a) => a * 10;
// console.log(multiplyByTen(20)); // 200
// console.log(multiplyByTen(40)); // 400

// Q11. Console individual values of the product object using object destructuring

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

// Your ES6 code here
// const { title, price, description } = product;

// console.log(title); // iPhone
// console.log(price); // 5999
// console.log(description); // The iPhone is a smartphone developed by Apple

// Q12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages

// Your ES6 code here
// const book = {
//   title: "Men's search for meaning",
//   author: "Viktor Frankl",
//   pages: 200,
// };
// const getBookDetails = (obj) => obj.pages > 100;
// console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
// console.log(getBookDetails(book)); // logs 'false' if the pages are 100 or below

// Q13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

// Your ES6 code here
const person = {
  name: "Amit",
  age: 25,
  occupation: "Software Engineer",
};

const changeOccupation = (obj, str) => (obj.occupation = str);

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

// Q14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
// Your ES6 code here
const [a, b, c] = numbers;
console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

// Q15. Convert the given function into ES6 with least amount of characters
// function defaultParamsFunc(a, b, c) {
//     if (c === undefined) {
//       c = 4
//     }
//     return a * b * c
//   }

const defaultParamsFunc = (a, b, c = 4) => a * b * c;
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120
