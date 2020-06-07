function solve() {
    document.querySelector("button").addEventListener("click", onClick);

    function onClick() {
        let list = document.querySelectorAll("li");
        let inputText = document.querySelector("input").value.trim();

        if (inputText) {
            let firstLetter = inputText[0].toUpperCase();
            let restLettrs = inputText.slice(1).toLowerCase();
            let outputWord = firstLetter + restLettrs;
            let index = firstLetter.charCodeAt(0) - 65;
    
            if (list[index].textContent) {
                list[index].textContent += ", " + outputWord;
            } else {
                list[index].textContent = outputWord;
            }
    
            document.querySelector("input").value = "";
                
        } else {
            return
        }
    }
}