`use strict`;

// TASK: #1

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mEl;
let mVal;

let reduced = arr.reduce((prev, curr) => {
  if (curr in prev) {
    prev[curr]++;
  } else {
    prev[curr] = 1;
  }
  return prev;
}, {});
console.log(reduced);

// TASK: #2

let joinedFunct = function (prop) {
  for (let i = 0; i < prop.length; i++) {
    if (prop[i] % 2 == 0) {
      prop[i] += `-`;
    }
  }
  let joinedArray = prop.join(``);
  return joinedArray;
};

let firstArray = [0, 2, 5, 4, 6, 8];
console.log(joinedFunct(firstArray));

// TASK: #3

let a = [1, 2, 3];
let b = [2, 30, 1];
let c = [];

let merg = function (arr1, arr2) {
  let arr = arr1.concat(arr2);
  for (let i = 0; i < arr.length; i++) {
    if (c.indexOf(arr[i]) === -1) {
      c.push(arr[i]);
    }
  }
};

merg(a, b);
console.log(c);

// TASK: #4

function readyToPutInTheDOM(arr) {
  return arr.map(itSnow => {
    return `<h1>${itSnow.name}</h1><h2>${itSnow.age}</h2>`;
  });
}

let itSnow = [
  { name: 'Angelina Jolie', age: 80 },
  { name: 'Eric Jones', age: 2 },
  { name: 'Paris Hilton', age: 5 },
  { name: 'Kayne West', age: 16 },
  { name: 'Bob Ziroll', age: 100 },
];
console.log(readyToPutInTheDOM(itSnow));

// TASK: #5
