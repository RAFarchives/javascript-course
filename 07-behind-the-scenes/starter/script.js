'use strict';
console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace();
}

outerFunction();
const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar);
}

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out';
}

console.log(notBlockScoped);

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name);
  }
  b();
}

a();

console.log(varX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); // 1
console.log(letX); // 2
console.log(constX); // 3

// Function hoisting examples
console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3)); // 5
console.log(addExpr(2, 3)); // 5
console.log(addArrow(2, 3)); // 5

const apiUrl = 'https://example.com';
console.log(apiUrl);

let title = 'Behind the Scenes';

function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Method borrowing
const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

// Detached function call
const greetFunction = person.greet;
greetFunction();

// This breaks in event handlers
const button = document.querySelector('button');
button.addEventListener('click', person.greet);

button.addEventListener('click', () => person.greet());

button.addEventListener('click', person.greet.bind(person));

const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name);
  },

  arrowMethod: () => {},
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod();
quiz.arrowMethod();

const timer = {
  name: 'Timer',

  // Old approach with self = this
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },

  // Modern approach with arrow function
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};

timer.start();
timer.startModern();

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],

  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },

  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

user.printHobbiesBad();
user.printHobbiesGood();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};
functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');
const myTimer = {
  name: 'My Timer',
  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};
myTimer.startCountdown();
