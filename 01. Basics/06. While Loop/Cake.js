function cake(input) {
    let cakeWidth = Number(input.shift());
    let cakeHeight = Number(input.shift());
    let cakeSize = cakeWidth * cakeHeight;
    let cakeEaten = 0;
    while (true) {
        let pieceSize = input.shift();
        if (pieceSize == "STOP") {
            if (cakeSize >= cakeEaten) {
                console.log(`${cakeSize - cakeEaten} pieces are left.`)
            } else {
                console.log(`No more cake left! You need ${cakeEaten - cakeSize} pieces more.`);
            }
            break;
        }
        cakeEaten += Number(pieceSize);
        if (cakeEaten > cakeSize) {
            console.log(`No more cake left! You need ${cakeEaten - cakeSize} pieces more.`);
            break;
        }
    }
}

cake([10, 2, 2, 4, 6, "STOP"]);
cake([10, 10, 20, 20, 20, 20, 21]);