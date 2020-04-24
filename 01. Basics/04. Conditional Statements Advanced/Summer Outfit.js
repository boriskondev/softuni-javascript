function summerOutfit(deg, time) {
    let degrees = Number(deg);
    let outfit = "";
    let shoes = "";
    if (10 <= degrees && degrees <= 18) {
        if (time == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (time == "Afternoon" || time == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (18 < degrees && degrees <= 24) {
        if (time == "Morning" || time == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (time == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (25 <= degrees) {
        if (time == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (time == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (time == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } 
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(16, "Morning");
summerOutfit(22, "Afternoon");