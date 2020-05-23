function solve(arr) {
    let result = Number(arr.shift());
    let operation;
    for (i = 0; i < arr.length; i++) {
        operation = arr[i];
        switch (operation) {
            case "chop":
                result /= 2;
                break
            case "dice":
                result = Math.sqrt(result);
                break;
            case "spice":
                result += 1;
                break;
            case "bake":
                result *= 3;
                break;
            case "fillet":
                result = result - (result * 0.2);
                break;
        }
        console.log(result)
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])