function password(input) {
    let user = input.shift();
    let userPass = input.shift();
    let currentPass = input.shift();
    while (currentPass != userPass) {
        currentPass = input.shift();
    }
    console.log(`Welcome ${user}!`);
}

password(["Nakov", "1234", "pass", "1324", "1234"]);