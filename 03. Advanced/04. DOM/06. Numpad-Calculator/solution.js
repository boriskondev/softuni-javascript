// 85% in SoftUni Judge

function solve() {
    let keyboardButtons = Array.from(document.querySelectorAll("button"));
    keyboardButtons.forEach(b => b.addEventListener("click", keyboardClicked));
    
    let expressionOutput = document.getElementById("expressionOutput");
    let resultOutput = document.getElementById("resultOutput");

    let operators = ["/", "*", "-", "+", "="]

    let expression = {
        firstNum: "",
        exprOper: null,
        secondNum: ""
    }

    let calculations = {
        "/": () => Number(expression.firstNum) / Number(expression.secondNum),
        "*": () => Number(expression.firstNum) * Number(expression.secondNum),
        "-": () => Number(expression.firstNum) - Number(expression.secondNum),
        "+": () => Number(expression.firstNum) + Number(expression.secondNum)
    };

    function keyboardClicked(e) {
        let buttonValue = e.target.value;

        if (operators.includes(buttonValue) || buttonValue === "Clear") {
            if (buttonValue === "Clear") {
                resultOutput.textContent = "";
                expressionOutput.textContent = "";
                expression = {
                    firstNum: "",
                    exprOper: null,
                    secondNum: ""
                }
            } else if (buttonValue !== "=") {
                expression.exprOper = buttonValue;
            } else {
                let result = calculations[expression.exprOper]();
                resultOutput.textContent = result;
            }
        } else {
            if (expression.exprOper === null) {
                expression.firstNum += buttonValue
            } else {
                expression.secondNum += buttonValue
            }
        }
    if (expression.exprOper === null) {
        expressionOutput.textContent = `${expression.firstNum}`
    } else {
        expressionOutput.textContent = `${expression.firstNum} ${expression.exprOper} ${expression.secondNum}`
    }
    console.log(expression)
    }
}