class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        let result;
        if (!isNaN(number)) {
            result = new Hex(this.value  + number);
        } else if (number instanceof Hex) {
            result = new Hex(this.value  + number.value);
        }
        return result;
    }

    minus(number) {
        let result;
        if (!isNaN(number)) {
            result = new Hex(this.value  - number);
        } else if (number instanceof Hex) {
            result = new Hex(this.value  - number.value);
        }
        return result;
    }

    parse(string) {
        return parseInt(string, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');



