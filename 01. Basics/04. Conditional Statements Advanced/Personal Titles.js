function personalTitles(num, str) {
    let age = Number(num);
    let sex = str;
    if (sex == "m") {
        if (age < 16) {
            console.log("Master");
        } else if (age >= 16) {
            console.log("Mr.");
        }
    } else if (sex == "f") {
        if (age < 16) {
            console.log("Miss");
        } else if (age >= 16) {
            console.log("Ms.");
        }
    }
}

personalTitles(12, "f");
personalTitles(17, "m");
personalTitles(25, "f");
personalTitles(13.5, "m");