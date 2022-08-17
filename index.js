let ans = 0;
let value = "";
let totalValue = [];
let NumInt = 0;
let operator = "";
let values = {firstValue: 0, secondValue: 0, thirdValue: 0};

let screenValue = document.getElementById('digit');
 
function assignOne(value) {    
    totalValue.push(value);
    Num = totalValue.join('');
    NumInt = Number(Num);
    screenValue.textContent = NumInt;
}
function assignOp (op) {
    if ( op == '+') {
        storeFirstValue(NumInt);
        screenValue.textContent = values.firstValue;
        operator = "add";
        totalValue = []; 
    } else if ( op == '-') {
        storeFirstValue(NumInt);
        operator = "subtract";
        totalValue = []; 
    } else if ( op == '*') {
        storeFirstValue(NumInt);
        operator = "multiply";
        totalValue = [];  
    } else if ( op == '/') {
        storeFirstValue(NumInt);
        operator = "divide";
        totalValue = []; 
    }
}
function storeFirstValue (value) {
    if (values.thirdValue) {
        values.firstValue = values.thirdValue;
    } else {
    values.firstValue = value;
    }
}
function assignAns() {
    console.log(values.firstValue);
    storeSecondValue(NumInt);
    console.log(values.secondValue);
    operate(operator, values.firstValue, values.secondValue)
}
function storeSecondValue(value) {
    values.secondValue = value;
}
function operate(operator, a, b) {
    if (operator == "add") {
        return add(a,b);
    } else if (operator == "subtract") {
        return subtract(a,b);
    } else if (operator == "multiply") {
        return multiply(a,b);
    } else if (operator == "divide") {
        return divide(a,b);
    }
}
function assignClr () { 
    storeThirdValue(0);
    storeFirstValue(0);
    storeSecondValue(0);
    NumInt = 0;
    totalValue = [];
    console.log(values.firstValue);
    console.log(values.secondValue);
    screenValue.textContent = 0;
}
function add(a,b) {
    let A = Number(a);
    let B = Number(b);
    ans = A + B;
    screenValue.textContent = ans;
    storeThirdValue(ans);
    console.log(ans);
    return ans;
}
function subtract(a,b) {
    let A = Number(a);
    let B = Number(b);
    ans = A - B;
    screenValue.textContent = ans;
    storeThirdValue(ans);
    console.log(ans);
    return ans;
}
function multiply(a,b) {
    let A = Number(a);
    let B = Number(b);
    ans = A * B;
    screenValue.textContent = ans;
    storeThirdValue(ans);
    console.log(ans);
    return ans;
}
function divide(a,b) {
    let A = Number(a);
    let B = Number(b);
    ans = A / B;
    screenValue.textContent = ans;
    storeThirdValue(ans);
    console.log(ans);
    return ans;
}
function storeThirdValue(value) {
    values.thirdValue = value;
}