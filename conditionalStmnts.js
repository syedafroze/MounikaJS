/*
if(condition){

}
else if(condition){

} 
else{

}
 


Switch case 

// 




ternary operator 

*/

let num1 = 5;
let num2 = 6;
let opr = "+";
// + - * % /

switch (opr) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid Operation");
}

//conditional operator
//short hand notation for if else

num1 == num2 ? console.log("equal") : console.log("!Equal");
