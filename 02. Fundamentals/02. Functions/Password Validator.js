function passwordValidator(pass) {
    let numCount = 0;
    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    } else {
        for (let i = 0; i < pass.length; i++) {
            if ((!isNaN(pass[i]) || (pass[i].charCodeAt(0) >= 65 && pass[i].charCodeAt(0) <= 90) || 
            (pass[i].charCodeAt(0) >= 97 && pass[i].charCodeAt(0) <= 122))) {
                if (!isNaN(pass[i])) {
                    numCount += 1;
                }
            } else {
                console.log("Password must consist only of letters and digits");
                break;
            }
        }
    }
    if (numCount < 2) {
        console.log("Password must have at least 2 digits");
    } else {
        console.log("Password is valid");
    }
}

passwordValidator('Pa$s$s');