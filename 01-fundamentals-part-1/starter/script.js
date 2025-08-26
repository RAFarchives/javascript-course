// // // // // JavaScript Fundamentals - Part 1
// // // // // We'll write our code here!
// // // // let js = 'amazing';
// // // // console.log(40 + 8 + 23 - 10);
// // // // console.log(js);

// // // // console.log("=== VARIABLES ===");

// // // // let firstName = "Rafael";
// // // // console.log(firstName);

// // // // let age = 30;
// // // // age = 31; // Reassigning variable
// // // // console.log(age);

// // // // const birthYear = 1993;
// // // // // birthYear = 1990; // This will cause an error
// // // // console.log(birthYear);
// // // // // const job; // This will also cause an error
// // // // console.log(job);

// // // // var job = 'programmer';
// // // // job = 'teacher';
// // // // console.log(job);

// // // // const PI = 3.1415;
// // // // console.log(PI);

// // // // var job = 'programmer';
// // // // job = 'teacher';
// // // // console.log(job);

// // // // const country = 'USA';
// // // // const continent = 'North America';
// // // // const language = 'English';

// // // // age = 31;
// // // // age = 32;

// // // // // let firstName
// // // // // let myCurrentJob = 'teacher';
// // // // // const PI 

// // // // console.log("=== DATA TYPES ===");
// // // // let id = 12345; // Number
// // // // console.log(id);
// // // // console.log(typeof id);


// // // // let lastName = 'Doe'; // String
// // // // console.log(lastName);
// // // // console.log(typeof lastName);

// // // // let JavaScriptIsFun = true; // Boolean
// // // // console.log(JavaScriptIsFun);
// // // // console.log(typeof JavaScriptIsFun);

// // // // let year; // Undefined
// // // // console.log(year);
// // // // console.log(typeof year);

// // // // let dynamicVariable = 23;
// // // // console.log(dynamicVariable);
// // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // dynamicVariable = 'Now I am a string';
// // // // console.log(dynamicVariable);
// // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // dynamicVariable = true;
// // // // console.log(dynamicVariable);
// // // // console.log(dynamicVariable, typeof dynamicVariable);

// JavaScript Fundamentals - Hour 1


// // // console.log("=== MATH OPERATORS ===");

// // // const now = 2037;
// // // const ageRafael = now - 1993;
// // // const ageSarah = now - 2018;
// // // console.log(ageRafael, ageSarah);

// // // console.log(ageRafael * 2, ageRafael / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// // // console.log("Math operations:");
// // // console.log("Addition:", 10 + 5); // 15
// // // console.log("Subtraction:", 20 - 8); // 12
// // // console.log("Multiplication:", 4 * 7); // 28
// // // console.log("Division:", 15 / 3); // 5
// // // console.log("Exponentiation:", 2 ** 3); // 8

// // // const firstName = 'Rafael';
// // // console.log(firstName + ' ' + 'Doe'); // String concatenation
// // // console.log('Hello ' + firstName + '!');

// // // console.log("I am " + ageRafael + " years old.");

// // // console.log("=== ASSIGNMENT OPERATORS ===");
// // // let x = 10 + 5; // 15
// // // x += 10; // x = x + 10 = 25
// // // console.log(x);

// // // x += 10; 
// // // console.log("After x += 10:", x);

// // // x *= 4; 
// // // console.log("After x *= 4:", x);

// // // x /= 2; 
// // // console.log("After x /= 2:", x);

// // // x++; // Same as: x = x + 1
// // // console.log("After x++:", x); // 51

// // // x--; 
// // // x--; 
// // // console.log("After x-- twice:", x); 

// // // console.log("=== COMPARISON OPERATORS ===");
// // // console.log(ageRafael > ageSarah); // >, <, >=, <=
// // // console.log(ageSarah >= 18);
// // // const isFullAge = ageSarah >= 18;
// // // console.log(isFullAge);

// // // console.log("Number comparison:");
// // // console.log(25 > 20); // true
// // // console.log(15 < 10); // false
// // // console.log(30 >= 30); // true
// // // console.log(18 <= 20); // true
// // // console.log(5 === 5); // true

// // // console.log("Complex expressions:");
// // // console.log(now - 1993 > now - 2018);

// // // console.log("=== OPERATOR PRECEDENCE ===");

// // // console.log(now - 1993 > now - 2018);
// // // const ageRafael2 = now - 1993;
// // // const ageSarah2 = now - 2018;

// // // console.log(ageRafael2, ageSarah2);


// // // let y;
// // // x = y = 25 - 10 - 5; // x = y = 10
// // // console.log(x, y);

// // // const averageAge = (ageRafael2 + ageSarah2) / 2;
// // // console.log(ageRafael2, ageSarah2, averageAge);

// // // // Coding Challenge #1 - BMI Calculator

// // // // Test Data 1
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;

// // // const BMIMark = massMark / (heightMark * heightMark);
// // // const BMIJohn = massJohn / (heightJohn * heightJohn);

// // // const markHigherBMI = BMIMark > BMIJohn;


// // // console.log("Mark's BMI:", BMIMark);
// // // console.log("John's BMI:", BMIJohn);
// // // console.log("Is Mark's BMI higher than John's?", markHigherBMI);

// // // //sana gumana
// JavaScript Fundamentals - Hour 2



// // const firstName = 'Rafael';
// // const job = 'teacher';
// // const birthYear = 1993;
// // const year = 2037;

// // const rafael = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// // console.log(rafael);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);

// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works: ${2 + 3} equals five`);
// // console.log(`Comparisons too: ${5 > 3}`);

// // console.log(`Just a regular string...`);

// // console.log(`String
// // multiple
// // lines`);

// // const age = 15;
// // if (age >= 18) {
// //     console.log('Sarah can start driving license 🚗');
// // } else {
// //     const yearsLeft = 18 - age;
// //     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }


// // const score = 85;

// // if (score >= 60) {
// //   console.log(`You passed with ${score} points! 🎉`);
// //   console.log("Congratulations!");
// // } else {
// //   const pointsNeeded = 60 - score;
// //   console.log(`You failed. Need ${pointsNeeded} more points.`);
// // }


// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean('Rafael'));
// // console.log(Boolean({}));
// // console.log(Boolean(''));

// // const money = 100;
// // if (money) {
// //   console.log("Don't spend it all ;)");
// // } else {
// //   console.log("You should get a job!");
// // }

// // let height = 0;
// // if (height) {
// //   console.log("YAY! Height is defined");
// // } else {
// //   console.log("Height is UNDEFINED"); 
// // }


// // if (height !== undefined) {
// //   console.log("Height is defined");
// // }


// // // Reuse your BMI calculation from Challenge #1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);

// // if (BMIMark > BMIJohn) {
// //   console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// // } else if (BMIJohn > BMIMark) {
// //   console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// // } else {
// //   console.log(`Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
// // }


// JavaScript Fundamentals - Hour 3




// const inputYear = '1993';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Rafael')); // NaN
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// console.log("I am " + 23 + " years old");
// console.log('23' - '10' - 3); // 10
// console.log('23' + '10' + 3); // 23103
// console.log('23' * '2'); // 46
// console.log('23' / '2'); // 11.5

// let n = "1" + 1; 
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + '5');
// console.log('10' - '4' - '3' - 2 + '5');

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");


// console.log("18" === 18); 
// console.log("18" == 18); 
// console.log(18 === 18); 

// console.log("0" == 0); 
// console.log(0 == false); 
// console.log("0" == false); 
// console.log(null == undefined);


// console.log("" == 0); 
// console.log("   " == 0); 

// const hasDriversLicense = true;
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }


const age = 23;


const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);


let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

////////////////////////////////////
// Coding Challenge #4

const bill = 275; 

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// JavaScript Fundamentals - Hour 4