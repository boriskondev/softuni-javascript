(function solve() {
    Array.prototype.last = function() {
        return this.pop();
    }

    Array.prototype.skip = function(n) {
        return this.slice(n);
    }

    Array.prototype.take = function(n) {
        if (n < this.length) {
            return this.slice(0, n);
        }
    }

    Array.prototype.sum = function() {
        return this.reduce((a, b) => a + b)
    }

    Array.prototype.average = function() {
        return this.sum() / this.length
    }
}());

let myArr = [1, 2, 3, 4, 5, 6]
//console.log(myArr.last())
console.log(myArr)
console.log(myArr.skip(3))
console.log(myArr.take(3))
console.log(myArr.sum())
console.log(myArr.average())