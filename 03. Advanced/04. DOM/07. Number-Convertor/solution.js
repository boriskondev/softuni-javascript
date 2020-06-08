function solve() {
    let convertToDropdown = document.getElementById("selectMenuTo");

    let binaryOption = document.createElement("option");
    binaryOption.textContent = "Binary";
    binaryOption.value = "binary";
    convertToDropdown.appendChild(binaryOption);

    let hexOption = document.createElement("option");
    hexOption.textContent = "Hexadecimal";
    hexOption.value = "hexadecimal";
    convertToDropdown.appendChild(hexOption);

    let convertButton = document.getElementsByTagName("button")[0];
    convertButton.addEventListener("click", convertNumber);

    function convertNumber() {
        let numberToConvert = Number(document.getElementById("input").value);
        let result = 0;
        let convertToValue = convertToDropdown.value;
        if (convertToValue == "binary") {
            result = (numberToConvert >>> 0).toString(2)
        } else {
            result = numberToConvert.toString(16).toUpperCase();
        }
        let outputResult = document.getElementById("result");
        outputResult.value = result;
    }
}