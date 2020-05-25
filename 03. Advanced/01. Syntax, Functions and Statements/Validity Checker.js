function validityChecker(arr) {
    let [x1, y1, x2, y2] = arr;

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);
    
    function isValid(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        
        const distance = Math.sqrt(distH ** 2 + distY ** 2);

        let result = Number.isInteger(distance) ? "valid" : "invalid";

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);
    }
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1])