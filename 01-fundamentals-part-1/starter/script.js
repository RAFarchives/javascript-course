// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName = "Rafael";
// console.log(firstName);

// let age = 30;
// age = 31; // Reassigning variable
// console.log(age);

// const birthYear = 1993;
// // birthYear = 1990; // This will cause an error
// console.log(birthYear);
// // const job; // This will also cause an error
// console.log(job);

// var job = 'programmer';
// job = 'teacher';
// console.log(job);

// const PI = 3.1415;
// console.log(PI);

// var job = 'programmer';
// job = 'teacher';
// console.log(job);

// const country = 'USA';
// const continent = 'North America';
// const language = 'English';

// age = 31;
// age = 32;

// // let firstName
// // let myCurrentJob = 'teacher';
// // const PI 

// console.log("=== DATA TYPES ===");
// let id = 12345; // Number
// console.log(id);
// console.log(typeof id);


// let lastName = 'Doe'; // String
// console.log(lastName);
// console.log(typeof lastName);

// let JavaScriptIsFun = true; // Boolean
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun);

// let year; // Undefined
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable);
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = 'Now I am a string';
// console.log(dynamicVariable);
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable);
// console.log(dynamicVariable, typeof dynamicVariable);


console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageRafael = now - 1993;
const ageSarah = now - 2018;
console.log(ageRafael, ageSarah);

console.log(ageRafael * 2, ageRafael / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

console.log("Math operations:");
console.log("Addition:", 10 + 5); // 15
console.log("Subtraction:", 20 - 8); // 12
console.log("Multiplication:", 4 * 7); // 28
console.log("Division:", 15 / 3); // 5
console.log("Exponentiation:", 2 ** 3); // 8

const firstName = 'Rafael';
console.log(firstName + ' ' + 'Doe'); // String concatenation
console.log('Hello ' + firstName + '!');

console.log("I am " + ageRafael + " years old.");

console.log("=== ASSIGNMENT OPERATORS ===");
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
console.log(x);

x += 10; 
console.log("After x += 10:", x);

x *= 4; 
console.log("After x *= 4:", x);

x /= 2; 
console.log("After x /= 2:", x);

x++; // Same as: x = x + 1
console.log("After x++:", x); // 51

x--; 
x--; 
console.log("After x-- twice:", x); 

console.log("=== COMPARISON OPERATORS ===");
console.log(ageRafael > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log("Number comparison:");
console.log(25 > 20); // true
console.log(15 < 10); // false
console.log(30 >= 30); // true
console.log(18 <= 20); // true
console.log(5 === 5); // true

console.log("Complex expressions:");
console.log(now - 1993 > now - 2018);

console.log("=== OPERATOR PRECEDENCE ===");

console.log(now - 1993 > now - 2018);
const ageRafael2 = now - 1993;
const ageSarah2 = now - 2018;

console.log(ageRafael2, ageSarah2);


let y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageRafael2 + ageSarah2) / 2;
console.log(ageRafael2, ageSarah2, averageAge);

// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;


console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);

//sana gumana