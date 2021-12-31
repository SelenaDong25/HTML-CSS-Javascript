// This program convert string variable to integer then store in another variable
var aStr = '-5';
var aNumber = parseInt(aStr,10);
var posNum = aNumber;
console.log(posNum);

// This program convert a Fahrenheit degree to Celsius degree 
var f = prompt("Enter the temperature in Fahrenheit:");
var c = (f-32) * 5/9;
console.log("In Celsius is " + c);

// This program compute the volume of a cylinder
// with user input radius and length
const pi = 3.1415926;
var radius = Number(prompt("Enter the radius:");
var length = Number(prompt("Enter the length of cylinder:");
var areaC = radius * radius * pi;
console.log("The volume of cylinder is " + areaC * length);