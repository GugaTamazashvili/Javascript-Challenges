`use strict`;

// TASK: Number #1

const arrayFunction = function (par) {
  for (let i = 0; i < par.sampleArray.length; i++) {
    if (par.isItarable == 1) {
      console.log(par.sampleArray[i]);
    } else if (par.isItarable != 1) {
      console.log(`provided array isn't itarable`);
    }
  }
};
const sampleObject = {
  isItarable: false,
  sampleArray: [12, 63, 21, 34, 98, 57],
};
arrayFunction(sampleObject);

// TASK: Number #2
// NOTE: ამ კოდის გამარტივება გული მიგრძნობს შესაძლებელია, თუ ნახავ, როგორ შეიძლება ეს კოდები გამარტივდეს ისე, რომ if - ში ამდენი ერთნაირი პირობის ჩაწერა არ დამჭირდეს?

const checkPythagoras = function (x, y, z) {
  if (
    x ** 2 == z ** 2 + y ** 2 ||
    y ** 2 == z ** 2 + y ** 2 ||
    z ** 2 == x ** 2 + y ** 2
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPythagoras(3, 4, 5));
console.log(checkPythagoras(1, 2, 3));

// TASK: Number #3
const randomNumbers = [2, 14, 25, 75, 11, 6];
const minMax = function (random) {
  let min = Math.min(...random);
  let max = Math.max(...random);
  console.log(`Min value is ${min} and Max value is ${max}`);
};
minMax(randomNumbers);

// TASK: Number #4

const angleFunction = function (testAngle) {
  if (testAngle > 0 && testAngle < 90) {
    console.log(`It's Acute Angle!`);
  } else if (testAngle == 90) {
    console.log(`It's Right Angle!`);
  } else if (testAngle > 90 && testAngle < 180) {
    console.log(`It's Obtuse Angle!`);
  } else if (testAngle == 180) {
    console.log(`It's Straight Angle!`);
  }
};
angleFunction(40);
angleFunction(90);
angleFunction(150);
angleFunction(180);

// TASK: Number #5
// SOS: i of studs - ის გარეშე ვერ გავაკეთე
// SOS: Return - რა შემთხვევაში უნდა
// SOS: გამოდის, ფუნქციის ავტომატიზირება მაინც არ ხდება, რადგან ობიექტის პარამეტრის სახელის შეყვანა მაინც გიწევს

let allStudents = [
  { name: `student1`, grade: 91 },
  { name: `student2`, grade: 71 },
  { name: `student3`, grade: 45 },
];
let checkStudentGrade = function (studs) {
  for (let i of studs) {
    if (i.grade > 0 && i.grade < 50) {
      i.finalResult = `F`;
    } else if (i.grade >= 51 && i.grade <= 60) {
      i.finalResult = `E`;
    } else if (i.grade >= 61 && i.grade <= 70) {
      i.finalResult = `D`;
    } else if (i.grade >= 71 && i.grade <= 80) {
      i.finalResult = `C`;
    } else if (i.grade >= 81 && i.grade <= 90) {
      i.finalResult = `B`;
    } else if (i.grade >= 91 && i.grade <= 100) {
      i.finalResult = `A`;
    }
  }
};
checkStudentGrade(allStudents);
console.log(allStudents);
