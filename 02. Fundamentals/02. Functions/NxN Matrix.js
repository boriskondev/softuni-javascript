function equalMatrix(n) {
    let string = n.toString() + " ";
    for (let row = 0; row < n; row++) {
        console.log(string.repeat(n));
    }
}

equalMatrix(3);