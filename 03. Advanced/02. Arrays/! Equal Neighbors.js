function solve(matrix) {
    let matches = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if ((row + 1 < matrix.length) || (col + 1 < matrix[row].length)) {
                if (matrix[row][col] === matrix[row+1][col]) {
                    console.log(`Found on row ${row} and col ${col} vertical`)
                    matches += 1;
                }

                if (matrix[row][col] === matrix[row][col+1]) {
                    console.log(`Found on row ${row} and col ${col} hotizontal`)
                    matches += 1;
                }
            }
        }
    }
    console.log(matches);
}

solve([["2", "2", "5", "7", "4"], 
        ["4", "0", "5", "3", "4"], 
        ["2", "5", "5", "4", "2"]])