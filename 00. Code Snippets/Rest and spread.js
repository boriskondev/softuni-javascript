// Rest parameter: collects all remaining elements into an array.
function solve(x, y, ...z) {
    console.log(x)
    console.log(y)
    console.log(z)
}

solve("b", "o", "r", "i", "s");

// Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.
function solve(a, b, c) {
    console.log(a + b)
    console.log(c)
}

let args = [1, 2, 3]

solve(...args)