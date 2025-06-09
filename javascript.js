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

// 'Clear' functionality
let button = document.createElement("button");
button.textContent = "Clear";
button.classList.add("buttonClear", "buttons");
button.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operator = "";
    displayContent = "";
    completedNumber = "";
    display.textContent = " ";
    displaybox.append(display);
})
buttonsboxleft.append(button);

// '1' functionality
button = document.createElement("button");
button.textContent = "1";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "1";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (operator !== "")
    {
        number2 = number2 + "1";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '2' functionality
button = document.createElement("button");
button.textContent = "2";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "2";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (operator !== "")
    {
        number2 = number2 + "2";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '3' functionality
button = document.createElement("button");
button.textContent = "3";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "3";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (operator !== "")
    {
        number2 = number2 + "3";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '4' functionality
button = document.createElement("button");
button.textContent = "4";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "4";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (operator !== "")
    {
        number2 = number2 + "4";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '5' functionality
button = document.createElement("button");
button.textContent = "5";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "5";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2 + "5";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '6' functionality
button = document.createElement("button");
button.textContent = "6";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "6";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2 + "6";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '7' functionality
button = document.createElement("button");
button.textContent = "7";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "7";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2 + "7";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '8' functionality
button = document.createElement("button");
button.textContent = "8";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "8";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2 + "8";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '9' functionality
button = document.createElement("button");
button.textContent = "9";
button.classList.add("button1-9", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "9";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2 + "9";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '0' functionality
button = document.createElement("button");
button.textContent = "0";
button.classList.add("button-0", "buttons");
button.addEventListener("click", () => {
    if (operator === "")
    {
        number1 = number1 + "0";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2 + "0";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '.' functionality
button = document.createElement("button");
button.textContent = ".";
button.classList.add("buttons", "button1-9");
button.addEventListener("click", () => {
    if (number1.includes(".") === false && operator === "")  
    {
        number1 = number1 + ".";
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number2.includes(".") === false && number1 !== "" && operator !== "")
    {
        number2 = number2 + ".";
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxleft.append(button);

// '+' functionality
button = document.createElement("button");
button.textContent = "+";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    operator = "add";
})
buttonsboxright.append(button);

// '-' functionality
button = document.createElement("button");
button.textContent = "-";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    operator = "subtract";
})
buttonsboxright.append(button);

// '*' functionality
button = document.createElement("button");
button.textContent = "*";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    operator = "multiply";
})
buttonsboxright.append(button);

// '/' functionality
button = document.createElement("button");
button.textContent = "/";
button.classList.add("buttonOperators", "buttons");
button.addEventListener("click", () => {
    operator = "divide";
})
buttonsboxright.append(button);

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
        display.textContent = number1;
        displaybox.append(display);
    }
    else if (number1 !== "" && operator !== "")
    {
        number2 = number2.slice(0,number2.length-1);
        display.textContent = number2;
        displaybox.append(display);
    }
})
buttonsboxright.append(button);

function add(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = b + completedNumber;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a + b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }
    
    number1 = "";
    number2 = "";
    operator = "";
}

function subtract(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = b - completedNumber;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a - b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }
    
    number1 = "";
    number2 = "";
    operator = "";
}

function multiply(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = b * completedNumber;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a * b;
        display.textContent = parseFloat(completedNumber.toFixed(1));;
        displaybox.append(display);
    }
    
    number1 = "";
    number2 = "";
    operator = "";
}

function divide(a,b) {
    if (completedNumber !== "")
    {
        completedNumber = b / completedNumber;
        display.textContent = parseFloat(completedNumber.toFixed(1));
        displaybox.append(display);
    }

    else 
    {
        completedNumber = a / b;
        display.textContent = parseFloat(completedNumber.toFixed(1));
        displaybox.append(display);
    }
    
    number1 = "";
    number2 = "";
    operator = "";
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
// reworking so inputs like '5 - 1 +' work, with the second + operator being used for the next equation
    // Personally I don't see a reason for this but the assignment instructs for it to be able to do so
// html and css touch-up
// if feeling ambitious: unlimit calculations to pairings of numbers, and evaluate entire equations at once.

// use displayContent as an equation and use it when operating to free up variables
