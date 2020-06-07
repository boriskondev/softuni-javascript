function solve() {
    let keyboardButtons = Array.from(document.querySelectorAll("button"));
    keyboardButtons.forEach(b => b.addEventListener("click", keyboardClicked));
    
    let expressionOutput = document.getElementById("expressionOutput");
    let resultOutput = document.getElementById("resultOutput");

    function keyboardClicked(e) {
        let buttonValue = e.target.value;
        buttonValue = Number.parseInt(buttonValue)

        if (Number.isNaN(buttonValue) && buttonValue !== ".") {
            console.log("Not a number!")
        } else {
            console.log("Number!")
        }


        // if (buttonValue === "Clear") {
        //     expressionOutput.textContent = "";
        //     resultOutput.textContent = "";
        // } else {
        //     console.log(Number.isNaN(buttonValue))
        // }
    }
}