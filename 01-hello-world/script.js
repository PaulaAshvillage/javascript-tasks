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
function add(a, b) {
  return a + b;
}
