//Welcome Message
function welcomeMsg(name) {
  return "Welcome" + " " + name;
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));
//Gross price Function
function calcGrossPrice(price, tax) {
  return price * tax + price;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

function addPositive(a, b) {
  return Math.abs(a + b);
}
console.log(addPositive(3, 5));

console.log(addPositive(3, -5));

console.log(addPositive(-1, -8));
