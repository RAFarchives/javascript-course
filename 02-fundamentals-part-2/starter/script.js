console.log("Part 2: Functions ready!");

console.log("=== FUNCTIONS ===");

function logger() {
  console.log("My name is Rafael");
}

// Calling / running / invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

////////////////////////////////////
// Function Expressions
function calcAge(birthYear, currentYear) {
  // Parameters
  const age = currentYear - birthYear;
  return age;
}

const myAge = calcAge(1991, 2037); // Arguments
const herAge = calcAge(2005, 2037);

console.log(`I am ${myAge} years old`);
console.log(`She is ${herAge} years old`);

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Rafael", "Schmedtmann", 46)); 
console.log(introduce("Sarah"));


////////////////////////////////////
// Return Values and Scope

function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear); // Using one function inside another!
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(1991, "Rafael"));
console.log(yearsUntilRetirement(1950, "Herszel"));

// Global scope
const globalVar = "I am global";

function testScope() {
  
  const localVar = "I am local";
  console.log(globalVar); 
  console.log(localVar); 
}

testScope();

console.log(globalVar);

////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins... (${avgDolphins} vs. ${avgKoalas})`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));







