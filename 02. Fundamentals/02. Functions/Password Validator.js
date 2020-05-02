function passwordValidator(stringToCheck) {
    let numCount = 0;
    let pass = stringToCheck.split("");
    let lengthOK = false;
    let hasLettersAndDigits = true;
    let digitsOK = false;

    if (pass.length > 6 && pass.length <= 10) {
        lengthOK = true;
    } else {
        console.log("Password must be between 6 and 10 characters");
    }

    for (let i = 0; i < pass.length; i++) {
        if (!((pass[i].charCodeAt(0) >= 48 && pass[i].charCodeAt(0) <= 57) ||
        (pass[i].charCodeAt(0) >= 65 && pass[i].charCodeAt(0) <= 90) ||
        (pass[i].charCodeAt(0) >= 97 && pass[i].charCodeAt(0) <= 122))) {
            hasLettersAndDigits = false;
            break;
        }
    }

    if (!hasLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }

    for (let i = 0; i < pass.length; i++) {
        if ((pass[i].charCodeAt(0) >= 48 && pass[i].charCodeAt(0) <= 57)) {
            numCount += 1;
            if (numCount >= 2) {
                digitsOK = true;
                break;
            }
        }
    }
    if (numCount < 2) {
        console.log("Password must have at least 2 digits");
    }  
    
    if (lengthOK && hasLettersAndDigits && digitsOK) {
        console.log("Password is valid");
    }
}


passwordValidator("logIn");