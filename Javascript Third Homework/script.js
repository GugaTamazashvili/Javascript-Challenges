`use strict`;

//TASK: #1

const biggestDivider = function (num1, num2) {
  if (num1 == 0) {
    return num2;
  }
  return biggestDivider(num2 % num1, num1);
};
console.log(biggestDivider(12, 16));

function gcd(num1, num2) {
  let r = 1;
  gcd = 0;
  while (r > gcd) {
    r = num1 % num2;
    if (r == 0) gcd = num2;
    else (num1 = num2), (num2 = r);
  }
  return gcd;
}
console.log(gcd(12, 24));

//TASK: #2

const sumOfDigits = function (n) {
  let result = 0;
  while (n) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  return result;
};

console.log(sumOfDigits(131266));

//TASK: #3

let factory = {
  facName: 'Volkswagen Wolfsburg Plant',
  calculateWorkload: function () {
    for (let i = 0; i < this.employeeWeeklyWorkload.length; i++) {
      console.log(this.employeeWeeklyWorkload[i].workload);
    }
  },
  formatArray: function (name) {
    let person = this.employees;
    let i = 1;
    while (i < person.length) {
      if (person[i].name === name) {
        return {
          name: person[i].name,
          timeSpent: person[i].timeSpent,
          timeleft: 5 - person[i].timeSpent + ` ` + `Years`,
        };
      }
    }
  },
};

let factoryEmployees = {
  employees: [
    { name: 'John', timeSpent: 1 },
    { name: 'Sam', timeSpent: 3 },
    { name: 'Maria', timeSpent: 2 },
    { name: 'Dan', timeSpent: 4 },
    { name: 'Lorelai', timeSpent: 5 },
  ],
};

let workloadData = {
  employeeWeeklyWorkload: [
    { name: 'John', workload: 40 },
    { name: 'Sam', workload: 25 },
    { name: 'Maria', workload: 28 },
    { name: 'Dan', workload: 30 },
    { name: 'Lorelai', workload: 31 },
  ],
};
const workersWorkLoad = factory.calculateWorkload.bind(workloadData);
const workersTimeLeft = factory.formatArray.bind(factoryEmployees, `Sam`);
workersWorkLoad();
console.log(workersTimeLeft());

//TASK: N4

const sumOfNumbers = function (num1, num2) {
  return num1 + num2;
};

console.log(sumOfNumbers.apply(null, [9, 4]));

//TASK: #5

const checkIfEven = function (n) {
  if (n % 2 == false) {
    console.log(`${n} is Even`);
  } else {
    console.log(`${n} is Odd`);
  }
};

checkIfEven(6);
