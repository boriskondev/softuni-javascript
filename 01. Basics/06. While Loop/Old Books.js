function oldBooks(input) {
    let searchedBook = input.shift();
    let capacity = input.shift();
    let currentBook = input.shift();
    let counter = 0;
    let isFound = false;
    while (counter < capacity) {
        if (currentBook == searchedBook) {
            console.log(`You checked ${counter} books and found it.`);
            isFound = true;
            break;
        }
        counter += 1;
        currentBook = input.shift();
    }
    if (isFound != true) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(["Troy", 8, "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", 4, "Hunger Games", "Harry Potter", "Torronto", "Spotify"]);