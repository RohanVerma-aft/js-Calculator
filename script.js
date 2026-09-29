const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const clearButton = document.querySelector("#C");

let flag = 0;

function evaluateExpression(expr) {
    if (expr.endsWith("=")) expr = expr.slice(0, -1);
    // allow only numbers, operators, parentheses, dots and spaces
    if (!/^[0-9+\-*/.() ]+$/.test(expr)) return { error: true };
    try {
        const result = Function('"use strict"; return (' + expr + ')')();
        if (!isFinite(result)) return { mathError: true };
        return { value: result };
    } catch (e) {
        return { error: true };
    }
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const btn = button.textContent;
        if (flag === 0) {
            if (btn === "=") return;
            display.textContent = btn;
            flag = 1;
            return;
        }

        if (btn === "=") {
            const expression = display.textContent;
            const res = evaluateExpression(expression);
            if (res.mathError) {
                display.textContent = "Math Error";
            } else if (res.error) {
                display.textContent = "Error";
            } else {
                display.textContent = res.value;
            }
            flag = 0;
            return;
        }

        display.textContent += btn;
    });
});

clearButton.addEventListener("click", function() {
    display.textContent = "0";
    flag = 0;
});

//AI version of code.