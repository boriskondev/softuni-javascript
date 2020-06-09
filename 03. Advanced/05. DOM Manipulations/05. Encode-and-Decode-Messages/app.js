function encodeAndDecodeMessages() {
    let buttons = [...document.querySelectorAll("button")];
    buttons.forEach(b => b.addEventListener("click", onClick));

    function encodeOrDecode(type, text) {
        let result = "";
        let step;
        type == "encode" ? step = 1 : step = -1;
        for (char of text) {
                result += String.fromCharCode(char.charCodeAt(0) + step);
            }
        return result
    }

    function onClick (e) {
        let buttonClicked = e.target;
        let operation = buttonClicked.textContent.split(" ")[0].toLowerCase();
        let currentTextArea = buttonClicked.parentNode.querySelector("textarea");
        let inputtedText = currentTextArea.value;

        let nextTextArea = [...document.querySelectorAll("textarea")].filter(x => x.placeholder != currentTextArea.placeholder)[0]

        if (buttonClicked.textContent == "Encode and send it" && inputtedText) {
            let result = encodeOrDecode(operation, inputtedText);
            currentTextArea.value = "";
            nextTextArea.value = result;
        } else if (buttonClicked.textContent == "Decode and read it" && inputtedText) {
            let result = encodeOrDecode(operation, inputtedText);
            currentTextArea.value = result;
        }
    }
}