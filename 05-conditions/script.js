//01:Fix the errors:
const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//02) oddEven function:

function oddEven(num) {
  if (num % 2 === 0) {
    //prüft,ob es einen Rest nach dem Teilen durch 2 gibt
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
console.log(oddEven(8));
console.log(oddEven(7));
console.log(oddEven(3));
console.log(oddEven(10));
console.log(oddEven(-1));

//03) oldYoung function

function oldYoung(age) {
  if (age < 0) {
    console.log("invalid parameter");
  } else if (age < 16) {
    console.log("child");
  } else if (age >= 16 && age < 50) {
    console.log("young person");
  } else {
    console.log("elder person");
  }
}
console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
console.log(oldYoung("86"));
