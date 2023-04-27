//01) oddNumbers function
function oddNum(numberOne, numberTwo) {
  let allNumbers = ""; //als string definieren!
  if (numberOne >= 0 && numberTwo >= 0) {
    for (let i = numberOne; i <= numberTwo; i++) {
      if (i % 2 != 0) {
        if (allNumbers === "") {
          //damit vor der ersten Zahl kein Komma steht
          allNumbers = allNumbers + i;
        } else {
          allNumbers = allNumbers + "," + i;
        }
      }
    }
  } else {
    console.log("Zahl muss positiv sein");
  }
  return allNumbers;
}
console.log(oddNum(0, 4));
// result should be: 1,3

console.log(oddNum(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNum(9, 12));
// result should be: 9,11

//check:
console.log(oddNum(9, -12));
//result should be: Zahl muss positiv sein

//02 charCount function
function charCount(word, character) {
  let CharCount = 0;
  if (character.length > 1) {
    return console.log("Darf nur aus einem Zeichen bestehen");
  } else {
    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i]; //Sichergehen,dass man durch das Wort iteriert
      if (currentChar === character) {
        CharCount = ++CharCount; //++ vor der Varaiblen damit zuerst erhöht und dann ausgegeben wird (Prefix increase)
      }
    }
  }
  return "Der Buchstabe kommt " + CharCount + " Mal im Wort vor";
}
console.log(charCount("Paula Acxhendurfva", "u"));

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
