function smallestOfThree(numOne, numTwo, numThree) {
    if (numOne > numTwo) {
        if (numTwo > numThree) {
            return numThree;
        } else {
            return numTwo
        }
    } else if (numOne < numThree) {
        return numOne;
    } else {
        return numThree;
    }
}

console.log(smallestOfThree(2, 5, 3));
console.log(smallestOfThree(600, 342, 123));
console.log(smallestOfThree(25, 21, 4));
