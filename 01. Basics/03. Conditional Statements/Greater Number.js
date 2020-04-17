function greaterNumber(num1, num2) {
    let number_one = Number(num1)
    let number_two = Number(num2)
    if (number_one > number_two) {
        console.log(number_one);
    } else if (number_two > number_one) {
        console.log(number_two);
    } else {
        console.log(number_one);
    }
}

greaterNumber(5, 3);
greaterNumber(3, 5);
greaterNumber(10, 10);
greaterNumber(-5, 5);