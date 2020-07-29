
// Created my prompts
var num1 = prompt("Please enter a whole number");
var num2 = prompt("Please enter another whole number");

console.log(num1);
console.log(num2);


// Here I reassigned num1 and num2 because the result was concatenating for addition which I did not want.
let n1 = Number(num2);
let n2 = Number(num1);


// I used a function to complete the math functions */-+ 

function doMath(){
    console.log(`The product is: ${num1*num2}`);
    console.log(`The qoutient is: ${num1/num2}`);
    console.log(`The difference is: ${Math.abs(num1-num2)}`);
    console.log(`The sum is: ${n1 + n2}`);
}
doMath();

