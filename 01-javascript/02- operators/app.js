 // operators 
 // Arithematic operator
 // + 
 // -
 // *
 // /
 // % modulus


//  var num1 = 50
//  var num2 = 30


//  console.log(num1 + num2);
//  console.log(num1 - num2);
//  console.log(num1 * num2);
//  console.log(num1 / num2);

// console.log(50 % 5);


var sub1 = +prompt("enter one subject marks / 100")
var sub2= +prompt("enter two subject marks /100")
var sub3= +prompt("enter three subject marks / 100")
var sub4= +prompt("enter fourth subject marks / 100")

var totalmarks = 400
var obtainedmarks = sub1 + sub2 + sub3 + sub4 /100
var persentage = obtainedmarks /totalmarks  * 100
console.log("persentage is" + persentage + "%");