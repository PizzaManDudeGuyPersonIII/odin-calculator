const container = document.querySelector(".container");
const displaybox = document.querySelector(".displaybox");
const buttonsbox = document.querySelector(".buttonsbox");
const buttonsboxleft = document.querySelector(".buttonsboxleft");
const buttonsboxright = document.querySelector(".buttonsboxright");
container.append();
displaybox.append();
buttonsbox.append();
buttonsboxleft.append();
buttonsboxright.append();

const display = document.createElement("p");
display.classList.add("display");
display.textContent = "display";
displaybox.append(display);

let count = 10;
let button = document.createElement("button");
button.textContent = "Clear";
button.classList.add("buttonClear", "buttons");
buttonsboxleft.append(button);

for (i=1; i<count;i++) {
    button = document.createElement("button");
    button.textContent = `${i}`;
    button.classList.add("button1-9", "buttons");
    buttonsboxleft.append(button);
}

button = document.createElement("button");
button.textContent = "0";
button.classList.add("button-0", "buttons");
buttonsboxleft.append(button);

button = document.createElement("button");
button.textContent = ".";
button.classList.add("buttons", "button1-9");
buttonsboxleft.append(button);

button = document.createElement("button");
button.textContent = "+";
button.classList.add("buttonOperators", "buttons");
buttonsboxright.append(button);

button = document.createElement("button");
button.textContent = "-";
button.classList.add("buttonOperators", "buttons");
buttonsboxright.append(button);

button = document.createElement("button");
button.textContent = "*";
button.classList.add("buttonOperators", "buttons");
buttonsboxright.append(button);

button = document.createElement("button");
button.textContent = "%";
button.classList.add("buttonOperators", "buttons");
buttonsboxright.append(button);

button = document.createElement("button");
button.textContent = "=";
button.classList.add("buttons", "buttonEquals");
buttonsboxright.append(button);

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

const number1 = 0;
const number2 = 0;
const operator = 0;

function operate(number1, operator, number2) {
    add(number1, number2);
}
