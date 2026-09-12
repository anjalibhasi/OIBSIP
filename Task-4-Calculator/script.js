const currentDisplay =
    document.getElementById("currentDisplay");

const previousDisplay =
    document.getElementById("previousDisplay");

const historyList =
    document.getElementById("historyList");

let currentValue = "";
let previousValue = "";
let operation = null;


// -------------------------
// Number Input
// -------------------------

document.querySelectorAll("[data-number]").forEach(button => {

    button.addEventListener("click", () => {

        const number = button.dataset.number;

        if (number === "." && currentValue.includes(".")) {
            return;
        }

        currentValue += number;

        updateDisplay();
    });

});


// -------------------------
// Operations
// -------------------------

document.querySelectorAll("[data-operation]").forEach(button => {

    button.addEventListener("click", () => {

        if (currentValue === "") {
            return;
        }

        if (previousValue !== "") {
            calculate();
        }

        operation = button.dataset.operation;

        previousValue = currentValue;

        currentValue = "";

        updateDisplay();
    });

});


// -------------------------
// Action Buttons
// -------------------------

document.querySelectorAll("[data-action]").forEach(button => {

    button.addEventListener("click", () => {

        const action = button.dataset.action;

        if (action === "clear") {
            clearCalculator();
        }

        if (action === "delete") {
            deleteNumber();
        }

        if (action === "percent") {
            percentage();
        }

        if (action === "calculate") {
            calculate();
        }

    });

});


// -------------------------
// Calculate
// -------------------------

function calculate() {

    if (
        previousValue === "" ||
        currentValue === "" ||
        operation === null
    ) {
        return;
    }

    const first =
        parseFloat(previousValue);

    const second =
        parseFloat(currentValue);

    let result;


    switch (operation) {

        case "+":
            result = first + second;
            break;

        case "-":
            result = first - second;
            break;

        case "*":
            result = first * second;
            break;

        case "/":

            if (second === 0) {

                currentValue = "Error";

                previousValue = "";
                operation = null;

                updateDisplay();

                return;
            }

            result = first / second;

            break;
    }


    result =
        Number(result.toFixed(10));

    addHistory(
        `${first} ${operation} ${second} = ${result}`
    );


    currentValue = result.toString();

    previousValue = "";

    operation = null;

    updateDisplay();
}


// -------------------------
// Clear
// -------------------------

function clearCalculator() {

    currentValue = "";

    previousValue = "";

    operation = null;

    updateDisplay();
}


// -------------------------
// Delete
// -------------------------

function deleteNumber() {

    if (currentValue === "Error") {

        clearCalculator();

        return;
    }

    currentValue =
        currentValue.slice(0, -1);

    updateDisplay();
}


// -------------------------
// Percentage
// -------------------------

function percentage() {

    if (currentValue === "") {
        return;
    }

    const value =
        parseFloat(currentValue);

    currentValue =
        (value / 100).toString();

    updateDisplay();
}


// -------------------------
// Display
// -------------------------

function updateDisplay() {

    currentDisplay.textContent =
        currentValue || "0";

    if (operation && previousValue) {

        previousDisplay.textContent =
            `${previousValue} ${operation}`;

    } else {

        previousDisplay.textContent = "";

    }
}


// -------------------------
// History
// -------------------------

function addHistory(calculation) {

    if (
        historyList.querySelector(
            ".empty-history"
        )
    ) {

        historyList.innerHTML = "";

    }


    const item =
        document.createElement("div");

    item.className =
        "history-item";

    item.textContent =
        calculation;

    historyList.prepend(item);
}


// -------------------------
// Clear History
// -------------------------

document
    .getElementById("clearHistory")
    .addEventListener("click", () => {

        historyList.innerHTML = `
            <p class="empty-history">
                No calculations yet
            </p>
        `;

    });


// -------------------------
// Keyboard Support
// -------------------------

document.addEventListener("keydown", event => {

    const key = event.key;


    if (
        !isNaN(key) ||
        key === "."
    ) {

        document
            .querySelector(
                `[data-number="${key}"]`
            )
            ?.click();

    }


    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        document
            .querySelector(
                `[data-operation="${key}"]`
            )
            ?.click();

    }


    if (key === "Enter" || key === "=") {

        document
            .querySelector(
                '[data-action="calculate"]'
            )
            ?.click();

    }


    if (key === "Backspace") {

        document
            .querySelector(
                '[data-action="delete"]'
            )
            ?.click();

    }


    if (key === "Escape") {

        document
            .querySelector(
                '[data-action="clear"]'
            )
            ?.click();

    }

});