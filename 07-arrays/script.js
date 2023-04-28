//01) removeItem function
function removeItem(arrayOfThings, Position) {
  const arrayOfThingsCopy = arrayOfThings.slice(); //copy of original Array given as parameter: to be changed if array consists of function or several arrays!

  removedItem = arrayOfThingsCopy.splice(Position - 1, 1); //-1 tomodify to Zero based position
  console.log("Dieses Item wurde entfern: " + removedItem);
  return arrayOfThingsCopy; //neue Liste rausgeben
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]
console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//03) sumOfCharacters function
function sumOfCharacters(arrayMix) {
  let charCounter = 0;
  for (let i = 0; i < arrayMix.length; i++) {
    if (typeof arrayMix[i] === "string") {
      //check for each index if it is a string
      for (let j = 0; j < arrayMix[i].length; j++) {
        //instead of storing an own variable the loop run time consists of the index of each array
        charCounter = ++charCounter;
      }
    } else {
    }
  }
  return charCounter;
}

const arr1 = [1, "Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17
const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
