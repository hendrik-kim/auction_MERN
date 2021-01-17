'use strict';

// 2. Object parameters: passed by ref

function changeName(obj) {
  obj.name = 'coder';
}

const hank = { name: 'hank' };

changeName(hank);

console.log(hank);

//3. Default parameters
function showMsg(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}

showMsg('hi');

// 4. Rest Parameter
function printAll(...args) {
  for (const i in args) {
    console.log(args[i]);
  }
}

printAll('hello', 'hank', 'kim');

// 5. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // logic
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // logic
}

//6 Function expression
const print = function () {
  console.log('print');
};

print();

const printAgain = print;
printAll();

//Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'yes') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('yes');
};

const printNo = function () {
  console.log('no');
};

randomQuiz('yes', printYes, printNo);
randomQuiz('blah', printYes, printNo);
