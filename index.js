function add (a,b) {
    return a + b;
}
function subtract (a,b) {
    return a - b;
}
function multiply (a,b) {
    return a * b;
}
function divide (a,b) {
    if (b == 0) {
        console.log("hi");
        valueDisplay = [];
        topValueDisplay = [];
        values.first = 0;
        values.second = 0; 
        ops.first = "";
        return  "ERROR! CANNOT DIVIDE BY 0!";
    }
    return a / b;
}
function operate (operator,num1,num2) {
    if (operator == "+") {
        return add(num1,num2)
    } else if (operator == "-") {
        return subtract(num1,num2);
    } else if (operator == "*") {
        return multiply(num1,num2);
    } else if (operator == "/") {
        return divide(num1,num2);
    }
}

let valueDisplay = [];
let topValueDisplay = [];
const numBtn = document.querySelectorAll('.numBtn');
const numBtnIndv = document.querySelector('.numBtn');
const clrBtn = document.querySelector('.clrBtn');
const equalBtn = document.querySelector('.equalTo');
const opBtn = document.querySelectorAll('.opBtn');
const opBtnIndv = document.querySelector('.opBtn');
const bottomScreen = document.querySelector('#bottomScreen');
const topScreen = document.querySelector('#topScreen');
const values = {first: 0, second: 0};
const ops = {first: 0, second: 0};

numBtn.forEach((numBtnIndv) => {
    numBtnIndv.addEventListener('click', () => {
        valueDisplay.push(numBtnIndv.id);
        topValueDisplay.push(numBtnIndv.id);
        tempBot = valueDisplay.join('');
        values.second = Number(tempBot);
        bottomScreen.textContent = tempBot;
    });

});

opBtn.forEach((opBtnIndv) => {
     opBtnIndv.addEventListener('click', () => {
            if (values.first) {
                ans = operate(ops.first,values.first,values.second);
                values.first = ans;
                tempString = ans.toString();
                valScreen = tempString + opBtnIndv.id;
                topScreen.textContent = valScreen;
                bottomScreen.textContent = ans;
                ops.first = opBtnIndv.id;
                valueDisplay = [];
            } else {
                values.first = values.second;
                topValueDisplay.push(opBtnIndv.id);
                tempTop = topValueDisplay.join('');
                ops.first = opBtnIndv.id;
                topScreen.textContent = tempTop;
                valueDisplay = [];
            }
    });
});

equalBtn.addEventListener('click', () => {
        answer = operate(ops.first,values.first,values.second);
        console.log(answer);
        answerScreen = values.first + ops.first + values.second + "=";
        topScreen.textContent = answerScreen;
        bottomScreen.textContent = answer;
});

clrBtn.addEventListener('click', () => {
    valueDisplay = [];
    topValueDisplay = [];
    values.first = 0;
    values.second = 0; 
    ops.first = "";
    topScreen.textContent = "";
    bottomScreen.textContent = 0;
});