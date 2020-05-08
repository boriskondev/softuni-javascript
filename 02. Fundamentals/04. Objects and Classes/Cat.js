function cat(string) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }
    for (let part of string) {
        partArr = part.split(" ");
        let catObj = new Cat(partArr[0], partArr[1]);
        catObj.meow();
    }
}

cat(['Mellow 2', 'Tom 5'])