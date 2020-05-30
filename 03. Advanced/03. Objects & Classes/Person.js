class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

boris = new Person("Boris", "Kondev", 33, "boriskondev@gmail.com")

console.log(boris)
console.log(boris.toString())