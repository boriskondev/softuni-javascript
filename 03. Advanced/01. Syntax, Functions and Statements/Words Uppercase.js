function wordsUppercase(string) {
    let regex = /\W+/g;
    let matchesArr = string.replace(regex, " ").trim().split(" ");
    let newArr = [];
    for (word of matchesArr) {
        newArr.push(word.toUpperCase())
    }
    console.log(newArr.join(", "))
}

wordsUppercase('Hi, how are you?');