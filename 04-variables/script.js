//01: fix the errors:
let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

//02:isString function:
let isString = function (anyVar) {
  typeof anyVar;
  console.log(typeof anyVar);
  if (typeof anyVar === "string") {
    result = true;
  } else {
    result = false;
  }
  return result;
};

console.log(isString("Hallo Welt"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
