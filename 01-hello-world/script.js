/*
each task starting with a
single line code
*/
//first task:
console.log("hello world");
console.log("Paula".length);
console.log("Paula".toUpperCase());
console.log((1.45).toFixed());
console.log("Hallo Paula".charAt(8));
//mit \ maskieren mit backslash
console.log(' "Hallo" ');
//boolean (true oder false)-->for conditions (0 und 1)
console.log(true);
//comparison Operator equal and not equal:
console.log(2 == 1);
console.log(2 != 1);
console.log("Paula" == "Paula");
//strict equal operator, nur diesen benutzen to be type safe!:
console.log("1" === 1); //false
console.log("1" == 1); //true
console.log("1" !== 1); //true
//logical operator AND-->&& OR­-->|| NOT-->! -->:
console.log(2 < 5 && 5 < 8);
//grouping operator():
console.log(2 + 5 * 3); //result=17
console.log((2 + 5) * 3); //result=21
//concatenation operator-->+ plus Zeichen kann neben addition auch concatenation
console.log("Hallo" + " Paula");
console.log("Pau" + "la" === "Paula"); //true
/*Funktionen=machen Code wiederverwendbar und ermöglichen eine Struktur
Funktion= Blaupause (definieren)--ausführen(executen)
return statement: kann Wert ausgeben wenn Funktion ausgeführt wird
methode=Spezifisch für ein Objekt*/
function myFirstFunction() {
  console.log("Hello Paula, deine erste Funktion");
}
//return statement--> beendet Funktion und es kann nur ein ausgeführt werden
myFirstFunction();

function addTwoNumbers(a, b) {
  return a + b;
}
console.log(addTwoNumbers(5, 6));
addTwoNumbers(5, 7);

//addition assignment operator as shortcut:
let count = 0;
count = count + 1;
console.log(count);
count += 1;
console.log(count);

let userName = "Paula";
userName += " " + "Aschendorf";
console.log(userName);

//type of Operator zur Typermittlung
let number = "3";
console.log(typeof number);
number = 3;
console.log(typeof number);
number = true;
console.log(typeof number);

//anonyme functionen--> function expression
const add = function (a, b) {
  return a + b;
};
//same wie:
function adding(a, b) {
  return a + b;
}

//Condition if statement(comparison rule) followed by body
const value = 8;
if (value > 4) {
  console.log("value is greater than 4");
} else if (value === 1) {
  console.log("value is 1");
} else if (value === 5) {
  console.log("value is 5");
} else {
  console.log("value is" + value);
}

//Switch Statement switch (comparison rule/expression) geprüft gegen jeden case, wenn ja break, rest:"default";
const myName = "Paula";
let result = "";
switch (myName) {
  case "Leonie":
    result = "Servus Leonie";
    break;
  case "Freddie":
    result = "Hallo Freddie";
    break;
  case "Paula":
    result = "Hallo Paula";
    break;
  default:
    result = "Hallo du";
}
console.log(result);

//Loops:Anweisungen die in einem kontinuierlichen Ablauf durchgeführt werden, Condition=Iteration
//aim define condition:avoid infinite loops!
//Loops can be nested-->multiple loops
//for-loop--> for(condition)--> 3 Teile separiert durch Semikolon:
// 1. Initialisierung;Condition;Increment/Decrement + body (auf die let Variable aus Initialisierung kann zugegriffen werden)
for (
  let i = 0;
  i < 5;
  i++ //Laufbedingung//
) {
  console.log("Rundenanzahl " + i); //Aktion für jeden Durchlauf
}

//While Loop: einen Baustein: Condition und Initialisierung und Increment/Decrement wird ausgelagert (man muss sich selber drum kümmern)
//do-while: wird immer mindestens einmal ausgeführt

//Statements Loops:
//break & continue!
function findFirstCharPosition(word, char) {
  let result;
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    if (currentChar === char) {
      result = i;
      break; //Buchstabe wurde gefunden, nun stoppe die Schleife!
    }

    console.log(currentChar);
  }
  return result;
}

console.log(findFirstCharPosition("Paula", "u"));
