function guessThePass(pass) {
    let checked = "s3cr3t!P@ssw0rd";
    if (pass == checked) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

guessThePass("qwerty")
guessThePass("s3cr3t!P@ssw0rd")
guessThePass("s3cr3t!p@ss")