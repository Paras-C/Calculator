var choice = prompt("What Would you like to do \n Addition (+)\n Subtraction (-)\n Division (/)\n Multiplication (*)\n Power (^)\n Square (sq) \n");

var firstNumText = prompt("Please Enter Your First Number");
var firstNum = parseFloat(firstNumText);
if(choice!=="sq")
{
  var secondNumText = prompt("Please Enter Your Second Number");
  var secondNum = parseFloat(secondNumText);
}

if(choice==="+")
{
  var answer = firstNum+secondNum;
  alert("Your Answer is: " + answer);
}
else if(choice==="-")
{
  var answer = firstNum-secondNum;
  alert("Your Answer is: " + answer);
}
else if(choice==="/")
{
  var answer = firstNum/secondNum;
  alert("Your Answer is: " + answer);

}
else if(choice==="*")
{
  var answer = firstNum*secondNum;
  alert("Your Answer is: " + answer);
}
else if(choice==="^")
{
 var answer = Math.pow(firstNum,secondNum);
 alert("Your Answer is: " + answer);

}
else if(choice==="sq")
{
  var answer = Math.sqrt(firstNum);
  alert("Your Answer is: " + answer);
}
else
{
  alert("Invalid Input. Please Enter a Valid Number/Operation.");
}


console.log("|  _________________  |");
console.log("| |            "+answer+"   | |");
console.log("| |_________________| |");
console.log("|  ___ ___ ___   ___  |");
console.log("| | 7 | 8 | 9 | | + | |");
console.log("| |___|___|___| |___| |");
console.log("| | 4 | 5 | 6 | | - | |");
console.log("| |___|___|___| |___| |");
console.log("| | 1 | 2 | 3 | | x | |");
console.log("| |___|___|___| |___| |");
console.log("| | . | 0 | = | | / | |");
console.log("| |___|___|___| |___| |");
console.log("|_____________________|");