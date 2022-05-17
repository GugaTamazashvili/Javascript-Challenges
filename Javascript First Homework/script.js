`use strict`;

//Task #1

const nameSister = `Ana`;
const nameBrother = `Levani`;
const ageSister = 28;
const ageBrother = 21;

const olderAge = ageSister - ageBrother;
console.log(`${nameSister} is older than ${nameBrother} (${olderAge})`);

//Task #2

const studentNames = [
  "John",
  "Sam",
  "Ann",
  "Will",
  "Andrew",
  "Joseph",
  "Lorelai",
  "Amelie",
  "Den",
];
console.log(studentNames[4]);

//Task #3

const studentName = {
  firstname: `Gregory`,
  lastName: `House`,
  age: 22,
  subject: [`Biology`, `Geography`, `History`, `Math`, `Chess`],
  roommate: { fullName: `Megan Fox`, age: 23 },
};
for (let i = 0; i < studentName.subject.length; i++) {
  console.log(studentName.subject[i]);
}

studentName.fullName = "Gregory House";
console.log(studentName);

const result = `${studentName.fullName} is ${studentName.age} years old and his roommate is ${studentName.roommate.fullName}`;

console.log(result);

// Task #4

const fruitArray = ["Banana", "Orange", "Apple", "Mango", 2, 12];
let i = 0;

while (i < fruitArray.length) {
  if (typeof fruitArray[i] !== "string") fruitArray.splice(i, 1);
  else i++;
}
console.log(fruitArray);

// Task #5

const numberList = [12, 23, 43, 11, 9, 2, 121, 90];
for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] > 31 && numberList[i] % 2 === 0) {
    console.log(`${numberList[i]} is greater than provided value and is EVEN`);
  } else if (numberList[i] > 31 && numberList[i] % 2 !== 0) {
    console.log(`${numberList[i]} is less than provided value and is ODD`);
  }
}

// Task #6

let BREAK_VALUE = 12;
let array = [41, 31, 81, 9, 2, 12, 71, 21, 32];
const arrayBreaker = function (BREAK_VALUE, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == BREAK_VALUE) {
      break;
    } else {
      console.log(array[i]);
    }
  }
};
arrayBreaker(BREAK_VALUE, array);
