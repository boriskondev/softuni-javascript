function animalType(type) {
    let animal = type;
    if (animal == "dog") {
        console.log("mammal");
    } else if (animal == "crocodile" || animal == "tortoise" || animal == "snake") {
        console.log("reptile");
    } else {
        console.log("unknown");
    }
}

animalType("dog");
animalType("snake");
animalType("cat");