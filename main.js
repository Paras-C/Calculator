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
  var answer = firstNum*firstNum;
  alert("Your Answer is: " + answer);
}
else
{
  alert("Invalid Input. Please Enter a Valid Number/Operation");
}