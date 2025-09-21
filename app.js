// let a = 1;
// let b = "1";

// console.log(a == b);
// console.log(a === b);
// == vs ===
// var , let, const

// loop : for, do while, while
// for loop , initial value, condition, increment
// for (a = 0; a <= 100; a++) {
//   console.log(a);
// }

// for (a = 1; a < 10; a++) {}
// let a = 1;

// a += 2; // a = a + 2;
// console.log(a);

// for (a = 1; a < 100; a++) {
//   console.log(a + ". JavaScript");
// }

// 1
// 1 < 100
// 1+1
// 2
// 2 < 100
// 2+1
// 3
// 3 < 100
// 3+1

let studentNames = [
  "Mobassir",
  "Ali",
  "Bijoy",
  "Tamzi",
  "Fatema Tuz",
  "Fathama Khatun",
  "Sajol",
];
// let studentRoll = [11, 2, 3, 4, 5];
// for (i = 0; i < studentRoll.length; i++) {
//   console.log(studentRoll[i]);
// }
// console.log(studentRoll[0]);
// console.log(studentRoll[1]);
// console.log(studentRoll[2]);

// console.log(studentNames.length);
// console.log(studentNames[0]);
// console.log(studentNames[1]);
// console.log(studentNames[2]);
// console.log(studentNames[3]);
// console.log(studentNames[4]);
// console.log(studentNames[5]);
// console.log(studentNames[6]);
// console.log(studentNames[7]);
// for (i = 1; i <= studentNames.length; i++) {
//   console.log(i + ". " + studentNames[i]);
// }

// function printArray(array) {
//   for (i = 0; i < array.length; i++) {
//     console.log(i + ". " + array[i]);
//   }
// }
// printArray(studentNames);
// printArray(studentRoll);

// function printCountryName(name) {}
/// country list
// bangladesh division list
let divisionList = [
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Barisal",
  "Sylhet",
  "Rangpur",
];

// function printDivisionList() {
//   for (i = 0; i < divisionList.length; i++) {
//     console.log(`${i} . Division Name is ${divisionList[i]}`);
//   }
// }
// printDivisionList();

const person1 = {
  name: "Tushar",
  age: 12,
  gender: "male",
  address: {
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh",
  },
  hobbies: ["reading", "traveling", "coding"],
  isMarried: false,
};

// console.log(Object.keys(person1));
// console.log(Object.values(person1));

let details = "We are learning JavaScript";
console.log(details.length);
console.log(details.toUpperCase());
console.log(details.toLowerCase());
console.log(details.charAt(16));
console.log(details.indexOf("JavaScript"));
console.log(details.replace("JavaScript", "Python"));
