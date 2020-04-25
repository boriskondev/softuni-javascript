function readText(input) {
    word = input.shift();
    while (word != "Stop") {
        console.log(word);
        word = input.shift();
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop"]);