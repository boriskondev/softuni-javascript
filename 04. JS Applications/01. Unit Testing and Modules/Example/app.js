function addNumbers(a, b) {
    return a + b;
}

function getNumber() {
    return 5;
}

function output(text) {
    document.querySelector("#output").textContent = text;
}

module.exports = {
    addNumbers,
    getNumber,
    output
}
