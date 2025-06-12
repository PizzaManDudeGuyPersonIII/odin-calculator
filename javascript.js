const container = document.querySelector(".container");
const displaybox = document.querySelector(".displaybox");
const buttonsbox = document.querySelector(".buttonsbox");
const buttonsboxleft = document.querySelector(".buttonsboxleft");
const buttonsboxright = document.querySelector(".buttonsboxright");

let displayContent = "";
let number1 = "";
let number2 = "";
let completedNumber = "";
let operator = "";

const display = document.createElement("p");
display.classList.add("display");
display.textContent = "display";
displaybox.append(display);

// Keyboard support
document.addEventListener("keypress", (event) => {

if (event.key === "c")
    inputClear();

else if (event.key === "1")
    inputOne();

else if (event.key === "2")
    inputTwo();

else if (event.key === "3")
    inputThree();

else if (event.key === "4")
    inputFour();

else if (event.key === "5")
    inputFive();

else if (event.key === "6")
    inputSix();

else if (event.key === "7")
    inputSeven();

else if (event.key === "8")
    inputEight();

else if (event.key === "9")
    inputNine();

else if (event.key === "0")
    inputZero();

else if (event.key === ".")
    inputDecimal();

else if (event.key === "+")
    inputAdd();

else if (event.key === "-")
    inputSub();

else if (event.key === "*")
    inputMult();

else if (event.key === "/")
    inputDivide();

else if (event.key === "=")
    operate(number1, operator, number2);

else if (event.key === "Backspace")
    inputBackspace();
});

function updateNumber1()
{
    display.textContent = number1;
    displaybox.append(display);
}

function updateNumber2()
{
    display.textContent = number2;
    displaybox.append(display);
}

function softReset()
{
    number1 = "";
    number2 = "";
    operator = "";
}

// 'Clear' functionality
let button = document.createElement("button");
button.textContent = "Clear";
button.classList.add("buttonClear", "buttons");
button.addEventListener("click", () => {
    inputClear();
})
buttonsboxleft.append(button);

function inputClear()
{
    softReset();
    displayContent = "";
    completedNumber = "";
    display.textContent = " ";
    displaybox.append(display);
}

// '1' functionality
button = document.createElement("button");
button.textContent = "1";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", function() {
    inputOne();
})
buttonsboxleft.append(button);

function inputOne()
{
    if (operator === "")
    {
        number1 = number1 + "1";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "1";
        updateNumber2();
    }
}

// '2' functionality
button = document.createElement("button");
button.textContent = "2";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputTwo();
})
buttonsboxleft.append(button);

function inputTwo()
{
    if (operator === "")
    {
        number1 = number1 + "2";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "2";
        updateNumber2();
    }
}

// '3' functionality
button = document.createElement("button");
button.textContent = "3";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputThree();
})
buttonsboxleft.append(button);

function inputThree()
{
    if (operator === "")
    {
        number1 = number1 + "3";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "3";
        updateNumber2();
    }
}

// '4' functionality
button = document.createElement("button");
button.textContent = "4";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputFour();
})
buttonsboxleft.append(button);

function inputFour()
{
    if (operator === "")
    {
        number1 = number1 + "4";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "4";
        updateNumber2();
    }
}

// '5' functionality
button = document.createElement("button");
button.textContent = "5";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputFive();
})
buttonsboxleft.append(button);

function inputFive()
{
    if (operator === "")
    {
        number1 = number1 + "5";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "5";
        updateNumber2();
    }
}

// '6' functionality
button = document.createElement("button");
button.textContent = "6";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputSix();
})
buttonsboxleft.append(button);

function inputSix()
{
    if (operator === "")
    {
        number1 = number1 + "6";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "6";
        updateNumber2();
    }
}

// '7' functionality
button = document.createElement("button");
button.textContent = "7";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputSeven();
})
buttonsboxleft.append(button);

function inputSeven()
{
    if (operator === "")
    {
        number1 = number1 + "7";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "7";
        updateNumber2();
    }
}

// '8' functionality
button = document.createElement("button");
button.textContent = "8";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputEight();
})
buttonsboxleft.append(button);

function inputEight()
{
    if (operator === "")
    {
        number1 = number1 + "8";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "8";
        updateNumber2();
    }
}

// '9' functionality
button = document.createElement("button");
button.textContent = "9";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    inputNine();
})
buttonsboxleft.append(button);

function inputNine()
{
    if (operator === "")
    {
        number1 = number1 + "9";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "9";
        updateNumber2();
    }
}

// '0' functionality
button = document.createElement("button");
button.textContent = "0";
button.classList.add("button-0", "buttons");
button.addEventListener("click", () => {
    inputZero();
})
buttonsboxleft.append(button);

function inputZero()
{
    if (operator === "")
    {
        number1 = number1 + "0";
        updateNumber1();
    }
    else if (operator !== "")
    {
        number2 = number2 + "0";
        updateNumber2();
    }
}

// '.' functionality
button = document.createElement("button");
button.textContent = ".";
button.classList.add("buttons", "button1-9");
button.addEventListener("click", () => {
    inputDecimal();
})
buttonsboxleft.append(button);

function inputDecimal()
{
    if (number1.includes(".") === false && operator === "")  
    {
        number1 = number1 + ".";
        updateNumber1();
    }
    else if (number2.includes(".") === false && number1 !== "" && operator !== "")
    {
        number2 = number2 + ".";
        updateNumber2();
    }
}

// '+' functionality
button = document.createElement("button");
button.textContent = "+";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    inputAdd();
})
buttonsboxright.append(button);

function inputAdd()
{
    if (operator === "") 
    {
        operator = "add";
    }
    else if ((number1 !== "" || completedNumber !== "") && operator !== "" && number2 !== "")
    {
        operate(number1, operator, number2);
        operator = "add";
    }
}

// '-' functionality
button = document.createElement("button");
button.textContent = "-";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    inputSub();
})
buttonsboxright.append(button);

function inputSub() 
{
    if (operator === "") 
    {
        operator = "subtract";
    }
    else if ((number1 !== "" || completedNumber !== "") && operator !== "" && number2 !== "")
    {
        operate(number1, operator, number2);
        operator = "subtract";
    }
}

// '*' functionality
button = document.createElement("button");
button.textContent = "*";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    inputMult();
})
buttonsboxright.append(button);

function inputMult()
{
    if (operator === "") 
    {
        operator = "multiply";
    }
    else if ((number1 !== "" || completedNumber !== "") && operator !== "" && number2 !== "")
    {
        operate(number1, operator, number2);
        operator = "multiply";
    }
}

// '/' functionality
button = document.createElement("button");
button.textContent = "/";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    inputDivide();
})
buttonsboxright.append(button);

function inputDivide()
{
    if (operator === "") 
    {
        operator = "divide";
    }
    else if ((number1 !== "" || completedNumber !== "") && operator !== "" && number2 !== "")
    {
        operate(number1, operator, number2);
        operator = "divide";
    }
}

// '=' functionality
button = document.createElement("button");
button.textContent = "=";
button.classList.add("buttons", "buttonEquals");
button.addEventListener("click", () => {
    operate(number1, operator, number2);
})
buttonsboxright.append(button);

// 'Backspace' functionality
button = document.createElement("button");
button.textContent = "Back";
button.classList.add("buttons", "button1-9");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1.slice(0,number1.length-1);
        updateNumber1();
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2.slice(0,number2.length-1);
        updateNumber2();
    }
})
buttonsboxright.append(button);

function add(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = completedNumber + b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a + b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }
    
    softReset();
}

function subtract(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = completedNumber - b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a - b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }
    
    softReset();
}

function multiply(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = completedNumber * b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a * b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }
    
    softReset();
}

function divide(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = completedNumber / b;
        display.textContent = parseFloat(completedNumber.toFixed(1));
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a / b;
        display.textContent = parseFloat(completedNumber.toFixed(1));
        displaybox.append(display);
    }
    
    softReset();
}

function operate(number1, operator, number2) {

    if (operator === "add")
    {   
        if (number1 !== "" && completedNumber === "")
            add(parseInt(number1), parseInt(number2));
        else if (number1 === "" && completedNumber !== "")
            add(completedNumber, parseInt(number2));
    }
    else if (operator === "subtract")
    {
        if (number1 !== "" && completedNumber === "")
            subtract(parseInt(number1), parseInt(number2));
        else if (number1 === "" && completedNumber !== "")
            subtract(completedNumber, parseInt(number2));
    }
    else if (operator === "multiply")
    {
        if (number1 !== "" && completedNumber === "")
            multiply(parseInt(number1), parseInt(number2));
        else if (number1 === "" && completedNumber !== "")
            multiply(completedNumber, parseInt(number2));
    }
    else if (operator === "divide")
    {
        if (number1 !== "" && completedNumber === "")
            divide(parseInt(number1), parseInt(number2));
        else if (number1 === "" && completedNumber !== "")
            divide(completedNumber, parseInt(number2));
    }
}

// To-Do List
// html and css touch-up
// if feeling ambitious: unlimit calculations to pairings of numbers, and evaluate entire equations at once.
