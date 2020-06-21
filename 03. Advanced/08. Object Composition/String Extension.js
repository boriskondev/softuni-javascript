String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
        return str + this.toString();
    }
    return this.toString()
}

String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
        return this.toString() + str;
    }
    return this.toString()
}

String.prototype.isEmpty = function () {
    return this.length === 0;
}

String.prototype.truncate = function(n) {
    if (n <= 3) {
        return ".".repeat(n);
    } else if (this.length < n) {
        return this.toString()
    } else if (this.length > n) {
        let lastIndexOfSpace = this.toString().substr(0, n - 2).lastIndexOf(" ");
        if (lastIndexOfSpace !== -1) {
            return this.toString().substr(0, lastIndexOfSpace) + "...";
        } else {
            return this.toString().substr(0, n - 3) + "...";
        }
    }
}

String.format = function(string, ...params) {
    for (let param = 0; param < params.length; param++) {
        let placeholder = "{" + param.toString() + "}";
        if (string.includes(placeholder)) {
            string = string.replace(placeholder, params[param])
        }
    }
    return string
}

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
