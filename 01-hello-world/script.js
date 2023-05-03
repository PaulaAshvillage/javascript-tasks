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

/*Loops:Anweisungen die in einem kontinuierlichen Ablauf durchgeführt werden, Condition=Iteration
aim define condition:avoid infinite loops!
Loops can be nested-->multiple loops
for-loop--> for(condition)--> 3 Teile separiert durch Semikolon:
 1. Initialisierung;Condition;Increment/Decrement + body (auf die let Variable aus Initialisierung kann zugegriffen werden)*/
for (
  let i = 0;
  i < 5;
  i++ //Laufbedingung//
) {
  console.log("Rundenanzahl " + i); //Aktion für jeden Durchlauf
}

/* for-of loop s.u. bei Arrays */

/*While Loop: einen Baustein: Condition und Initialisierung und Increment/Decrement wird ausgelagert (man muss sich selber drum kümmern)
do-while: wird immer mindestens einmal ausgeführt

Statements Loops:
break & continue!*/
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

/*Arrays =reference type ein Array= eine Einheit
good practice: const immer als Array nutzen, damit es ein Array bleibt
jeder valide Datentyp kann hinzugefügt werden (function, data types ...) auch alles gemischt in ein Array!
also zum Beispiel ein Array mit verschiedenen Funktionen die alle abgearbeitet werden sollen
verschiedene Methods and Properties!*/
const coolPlayers = ["Paula", "Michael", "Scottie"];
console.log("Who is the MVP this Season?: " + coolPlayers[0]);

//Arrays can be nested:
const colors = [["hotpink", "#FF69B4"], [("dodger blue", "#1e90ff")]];
//aufrufen:
console.log("Color name " + colors[0][0] + ", hex value: " + colors[0][1]);
//Methoden Array:
//Destructive Methods:
//Push (am Ende) und Unshift (am Anfang) hinzufügen:
coolPlayers.push("Lebron");
console.log(coolPlayers);
//Remove one value: pop (am Ende) und shift (am Anfang)
//Splice method (Startpunkt, wie viele von dort ausgehend): remove, add, replace
//Slice method
coolPlayers.splice(1, 0, "Stev", "Luka"); //remove 0, add an der Stelle 2
console.log("Neue Liste after splice method: " + coolPlayers);
/*Combination: (start,replace,Werte) (1,2,"Moritz","Franz")

Non-destructive manipulation Method (slice, concat, filter, map)
Vorteil: safer, since you always have an original copy of the array!

Slice Methode: Stückweise ausschneiden und als neues Array ausgegeben altes array wird nicht verändert!
2 Werte (start&end(nur bis dorthin und nicht inklusive!))(hinten anfangen (negative Zahlen))
gebe ich keine Werte rein, wird eine gesamte shallow copy erstellt*/
const NBAPlayer = coolPlayers.slice(1, -1);
console.log(NBAPlayer);
console.log(coolPlayers);

//Loop over Arrays
for (let i = 0; i < coolPlayers.length; i++) {
  console.log(coolPlayers[i]); //mit eckigen Klammern auf Array zugreifen
}
//kurz: for of /wie for each
for (let coolPlayerEntry of coolPlayers) {
  console.log(coolPlayerEntry);
}

//objects: option to store collections of information javascript=object based
//auch primitive data types are objects as soon as a function like getlength angewandt wird
//each piece of information stored in an object is calles property and has a name and a value
//im Vergleich zum Array: Zugriff mittels Name und nciht Index
//Object auch veränderbar wie bei arrays
//objects are also reference data types (#copy)
//anatomy (=object literal syntax):
const myObject = {
  firstname: "Paula",
  surname: "Aschendorf",
  address: {
    //can be nested
    zipCode: 50858,
    street: "Frohnhofweg 15",
  },
};
console.log(myObject.address.street); //dot notation to access property
console.log(myObject["surname"]); //bracket notation
let property = "firstname";
console.log(myObject[property]); //felxibler und dynamischer, wenn Werte zusammengebaut werden möglich
//neuen Eintrag anlegen:
myObject.hair = "blonde";
console.log(myObject["hair"]);
//überschreiben, durch neu setzen!:
myObject.firstname = "Friederike";
console.log(myObject["firstname"]);
//delete:
delete myObject.firstname;
console.log(myObject["firstname"]); //console:undefined
//iterate/loop over objects: for in loop
for (const properties in myObject) {
  console.log(properties, myObject[properties]);
}
