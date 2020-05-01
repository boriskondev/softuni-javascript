function charsInRange(charOne, charTwo) {
    let start = 0;
    let end = 0;
    let result = "";
    if (charOne.charCodeAt(0) < charTwo.charCodeAt(0)) {
        start = charOne.charCodeAt(0) + 1;
        end = charTwo.charCodeAt(0) - 1;
    } else {
        start = charTwo.charCodeAt(0) + 1;
        end = charOne.charCodeAt(0) - 1;
    }
    for (start; start <= end; start++) {
        result += `${String.fromCharCode(start)} `;
    }
    return result
}

console.log(charsInRange("a", "d"));