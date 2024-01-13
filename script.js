function changeToArth(){
    var divfunc = document.getElementById("function");
    var divnumsys = document.getElementById("num_system");
    var divarth = document.getElementById("arithmetic");

    if(divfunc.style.display = "grid")
    {
        divfunc.style.display = "none";
    }
    if(divnumsys.style.display = "grid")
    {
        divnumsys.style.display = "none";
    }

    divarth.style.display = "grid";
}

function changeToFunc(){
    var divfunc = document.getElementById("function");
    var divnumsys = document.getElementById("num_system");
    var divarth = document.getElementById("arithmetic");
    if(divarth.style.display = "grid")
    {
        divarth.style.display = "none";
    }
    if(divnumsys.style.display = "grid")
    {
        divnumsys.style.display = "none";
    }

    divfunc.style.display = "grid";
}

function changeToNumsys(){
    var divfunc = document.getElementById("function");
    var divnumsys = document.getElementById("num_system");
    var divarth = document.getElementById("arithmetic");
    
    if(divarth.style.display = "grid")
    {
        divarth.style.display = "none";
    }
    if(divfunc.style.display = "grid")
    {
        divfunc.style.display = "none";
    }
    divnumsys.style.display = "grid";
}

function returnNumFromStr(str){
    console.log(str)
 
    // Using match with regEx
    let matches = str.match(/(\d+)/);
     
    // Display output if number extracted
    if (matches) {
        console.log(matches[0]);
    }
    return matches[0];
}


var strexp = "";

var strval = "";
var strval1 = "", strval2 = "";
var numSys = ["fromDec()toBin()", "fromDec()toOct()", "fromDec()toHex()", "fromBin()toDec()","fromBin()toOct()", "fromBin()toHex()",
                 "fromOct()toDec()","fromOct()toBin()", "fromOct()toHex()", "fromHex()toDec()", "fromHex()toBin()", "fromHex()toOct()","sin()", "cos()", "tan()", "x^3", "x^2", "x!", "logx", "sqrt(x),10^x"];
//var func = ["sin()", "cos()", "tan()", "x^y", "x^2", "x!", "logx", "sqrt()"];
function split(){
    var temp, i = 0;
    var str = inputdisplay.value;
    while(str[i] != ":")
    {   
        strexp = strexp + str[i];
        temp = i;
        i++;
    }
    for(var i = temp+2; i != str.length ; i++)
    {
        strval = strval + str[i];
    }
    console.log(strexp);
    console.log(strval);
    /*for(var i = 0 ; numSys[i] != '\0' ; i++)
    {
        if(strexp == numSys[i])
        {
            return 1;
        }
    }*/
    
}
function calc()
{

      
      //if(split()){
        split();
        if(strexp == "fromDec()toBin()")
        {
            outputdisplay.value = decToBin(Number(strval));//Number() converts string to integer
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromDec()toOct()")
        {
            outputdisplay.value = decToOct(Number(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromDec()toHex()")
        {
            outputdisplay.value = decToHex(Number(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromBin()toDec()")
        {
            outputdisplay.value = binToDec(strval);
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromBin()toOct()")//bin to dec then dec to oct
        {
            outputdisplay.value = decToOct(binToDec(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromBin()toHex()")//binaryToDecimal then dec to hex
        {
            outputdisplay.value = decToHex(binToDec(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromOct()toDec()")
        {
            outputdisplay.value = octToDec(strval);
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromOct()toBin()")//oct to dec then dec to bin
        {
            outputdisplay.value = decToBin(octToDec(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromOct()toHex()")//oct to dec then dec to hex
        {
            outputdisplay.value = decToHex(octToDec(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromHex()toDec()")
        {
            outputdisplay.value = hexToDec(strval);
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromHex()toBin()")//hex to dec then dec to bin
        {
            outputdisplay.value = decToBin(hexToDec(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "fromHex()toOct()")//hex to dec then dec to oct
        {
            outputdisplay.value = decToOct(hexToDec(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "sin()")
        {
            outputdisplay.value = sinEval(Number(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "cos()")
        { 
            if(strval == "90")
            {
              outputdisplay.value = '0';
              ans = outputdisplay.value;
            }
            else
            {
              outputdisplay.value = cosEval(Number(strval));
            }
            strexp = "";
            strval = "";
        }
        else if(strexp == "tan()")
        {
            if(strval == "90")
            {
              outputdisplay.value = "undefined";
            }
            else
            {
              outputdisplay.value = tanEval(Number(strval));
            }
            strexp = "";
            strval = "";
        }
        else if(strexp == "x^3")
        {
            outputdisplay.value = xPower3(Number(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "x^2")
        {
            outputdisplay.value = xPower2(Number(strval));
            strexp = "";
            strval = "";
        }
        else if(strexp == "x!")
        {
          outputdisplay.value = fact(Number(strval));
          strexp = "";
          strval = "";
        }
        else if(strexp == "logx")
        {
          outputdisplay.value = Math.log10(Number(strval));
          strexp = "";
          strval = "";
        }
        else if(strexp == "sqrt(x)")
        {
          outputdisplay.value = Math.sqrt(Number(strval));
          strexp = "";
          strval = "";
        }
        else if(strexp == "10^x")
        {
          outputdisplay.value = Math.pow(10, Number(strval));
          strexp = "";
          strval = "";
        }
}
var ans;
function equal(){
        outputdisplay.value = solveBodmasExpression(inputdisplay.value);
        ans = outputdisplay.value;
}
//function to solve complex expression -----------------------------------------Start
function solveBodmasExpression(expression){
    // Helper function to evaluate expressions within brackets
    function evaluateBracketExpression(subExpression) {
      return solveBodmasExpression(subExpression);
    }
  
    // Helper function to apply the appropriate operator to two operands
    function applyOperator(operand1, operator, operand2) {
      switch (operator) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          if (operand2 === 0) {
            throw new Error('Division by zero');
          }
          return operand1 / operand2;
        default:
          throw new Error('Invalid operator: ' + operator);
      }
    }
  
    // Operator precedence levels
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    const operatorStack = [];
    const operandStack = [];
    let currentNumber = '';
  
    for (const char of expression) {
      if (char === ' ') {
        // Ignore spaces
        continue;
      }
  
      if (!isNaN(char) || char === '.') {
        // Build the currentNumber as a string until we reach an operator
        currentNumber += char;
      } else {
        if (currentNumber !== '') {
          // Push the number onto the operand stack
          operandStack.push(parseFloat(currentNumber));
          currentNumber = '';
        }
  
        if (char === '(') {
          // Push open brackets onto the operator stack
          operatorStack.push(char);
        } else if (char === ')') {
          // Evaluate expressions within brackets until we encounter an open bracket
          while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
            const operator = operatorStack.pop();
            const operand2 = operandStack.pop();
            const operand1 = operandStack.pop();
            operandStack.push(applyOperator(operand1, operator, operand2));
          }
  
          if (operatorStack.length === 0 || operatorStack.pop() !== '(') {
            throw new Error('Mismatched brackets');
          }
        } else if (precedence[char]) {
          // Pop operators from the operator stack with higher or equal precedence
          // and apply them to the operands
          while (
            operatorStack.length > 0 &&
            operatorStack[operatorStack.length - 1] !== '(' &&
            precedence[char] <= precedence[operatorStack[operatorStack.length - 1]]
          ) {
            const operator = operatorStack.pop();
            const operand2 = operandStack.pop();
            const operand1 = operandStack.pop();
            operandStack.push(applyOperator(operand1, operator, operand2));
          }
          // Push the current operator onto the operator stack
          operatorStack.push(char);
        } else {
          throw new Error('Invalid character: ' + char);
        }
      }
    }
  
    if (currentNumber !== '') {
      operandStack.push(parseFloat(currentNumber));
    }
  
    // Process any remaining operators on the stacks
    while (operatorStack.length > 0) {
      const operator = operatorStack.pop();
      const operand2 = operandStack.pop();
      const operand1 = operandStack.pop();
      operandStack.push(applyOperator(operand1, operator, operand2));
    }
  
    if (operandStack.length !== 1) {
      throw new Error('Invalid expression');
    }
  
    return operandStack[0];
  }
//function to solve complex expression -------------------------------------------End

//Number System conversion Funtions 
//dec to bin
function decToBin(decimalNumber){
    return decimalNumber.toString(2);
}
//dec to oct 
function decToOct(decimalNumber){
    // Use the toString() method with base 8 to convert to octal
    return decimalNumber.toString(8);
    
}
//dec to hex
function decToHex(decimalNumber){
    // Use the toString() method with base 16 to convert to hexadecimal
    return decimalNumber.toString(16).toUpperCase();
    
}
//bin to dec
function binToDec(binaryString){
    // Use parseInt() with base 2 to convert binary to decimal
        return parseInt(binaryString, 2);
}

//oct to dec
function octToDec(octalString){
    // Use parseInt() with base 8 to convert octal to decimal
        return parseInt(octalString, 8);
}

//hex to dec
function hexToDec(hexString){
    // Remove the "0x" prefix if it exists
        if (hexString.startsWith("0x")) {
        hexString = hexString.slice(2);
        }

    // Use parseInt() with base 16 to convert hexadecimal to decimal
        return parseInt(hexString, 16);

}

var change = 0;
function allClear(){
    inputdisplay.value = '';
    outputdisplay.value = '';
}

var x;
let strnum="";
//Functions section functions 
function sinEval(x) {
    if(change == 1)
    {
        outputdisplay.value=Math.sin(x);
        ans = outputdisplay.value;
    }
    if(change == 0)
    {
        outputdisplay.value=Math.sin(x*(Math.PI/180));
        ans = outputdisplay.value;
    }
    return ans;   
}
function cosEval(x) {
    if(change == 1)
    {
        outputdisplay.value=Math.cos(x);
        ans = outputdisplay.value;

    }
    if(change == 0)
    {
        outputdisplay.value=Math.cos(x*(Math.PI/180));
        ans = outputdisplay.value;
    }
    return ans;
}
function tanEval(x) {
    if(change == 1)
    {
        outputdisplay.value=Math.tan(x);
        ans = outputdisplay.value;
    }
    if(change == 0)
    {
        outputdisplay.value=Math.tan(x*(Math.PI/180));
        ans = outputdisplay.value;
    }
    return ans;
}
    
    

//function xPowery
function xPower3(x)
{
  outputdisplay.value = Math.pow(x , 3);
  ans = outputdisplay.value;
  return ans;
}
function xPower2(x){
  //x = inputdisplay.value;
  outputdisplay.value = Math.pow(x , 2);
  ans = outputdisplay.value;
  return ans;
}

//function xfact
function fact(x){
    if(x == 0 || x == 1){
        return 1;
    }
    else{
        return x * fact(x-1);
    }
}
function xFact(){
    var x = inputdisplay.value;
    outputdisplay.value = fact(x);
    ans = outputdisplay.value;
}

function getremainder(){
  var string = inputdisplay.value
  const parts = string.split("%");
  console.log(parts[0]+" "+parts[1]);
  outputdisplay.value = parts[0] % parts[1];
}

/*function logX(){
  x = inputdisplay.value;
  outputdisplay.value = Math.log10(x);
  ans = outputdisplay.value;
}*/

function squareRoot(){
    x = inputdisplay.value;
    outputdisplay.value = Math.sqrt(x);
    ans = outputdisplay.value;
}
function changeToRad(){
    change = 1;
    alert("MODE : Radian");
}
function changetoDeg(){
    change = 0;
    alert("MODE : Degree");
}

function answer(){
    inputdisplay.value += ans;
}
function off(){
  window.close();
}
function on(){
  var main_calc = document.getElementById("main_calc");
  main_calc.style.opacity = 1;
}
const gradient1 = 'linear-gradient(to top right, #ff00ff 0%, #00ffcc 100%)';
const gradient2 = 'linear-gradient(to top right, #000066 25%, #6600ff 79%)';
var isGradient1 = 1;
function changeTheme(){
        var mainDiv = document.getElementById("m");
            if (isGradient1) {
              mainDiv.style.background = gradient2;
              isGradient1 = 0;
            } else {
              mainDiv.style.background = gradient1;
              isGradient1 = 1;
            }
}

function fractionToDecimal(numerator, denominator) {
  if (denominator === 0) {
      return "Undefined";
  }

  return (numerator / denominator).toFixed(2); // Change 2 to the desired number of decimal places
}

// Function to convert a decimal to a simplified fraction
var check=1;
function dectoFrac()
{
  if (check)
  {
    outputdisplay.value = decimalToFraction(outputdisplay.value); 
    check = 0;
  }
  else 
  {
    outputdisplay.value = ans; 
    check = 1;
  }
}
function decimalToFraction(decimal) {
  // Check if the decimal is empty or null
  if (decimal == null || decimal.trim() === "") {
    return "Invalid input";
  }

  // Split the decimal into its integral and fractional parts
  const parts = decimal.split(".");

  // Get the integral part
  const integralPart = parseInt(parts[0], 10);

  // Get the fractional part
  const fractionalPart = parts[1];

  // If the fractional part is empty, then the decimal is an integer
  if (fractionalPart.trim() === "") {
    return String(integralPart);
  }
  if(fractionalPart.length > 4)
  {
    return decimal;
  }

  // Convert the fractional part to a numerator and denominator
  let numerator = parseInt(fractionalPart, 10);
  let denominator = 1;
  for (let i = 0; i < fractionalPart.length; i++) {
    denominator *= 10;
  }

  // Simplify the fraction
  const gcd = greatestCommonDivisor(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;
  console.log(numerator+"/"+denominator);
  if(decimal > 1)
  {
    numerator = denominator + numerator;
  }
  console.log(numerator+"/"+denominator);

  // Return the fraction as a string
  return `${numerator}/${denominator}`;
}

function fractionToDecimal(fraction) {
  // Check if the fraction is empty or null
  if (fraction == null || fraction.trim() === "") {
    return "Invalid input";
  }

  // Split the fraction into its numerator and denominator
  const parts = fraction.split("/");

  // Get the numerator
  const numerator = parseInt(parts[0], 10);

  // Get the denominator
  const denominator = parseInt(parts[1], 10);

  // Check if the denominator is 0
  if (denominator === 0) {
    return "Division by 0";
  }

  // Convert the fraction to a decimal
  const decimal = numerator / denominator;

  // Round the decimal to two decimal places
  const roundedDecimal = decimal.toFixed(2);

  // Return the decimal as a string
  return roundedDecimal;
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }

  return greatestCommonDivisor(b, a % b);
}