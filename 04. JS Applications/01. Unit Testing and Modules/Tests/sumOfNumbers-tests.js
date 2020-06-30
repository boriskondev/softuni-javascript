const expect = require("chai").expect;
const sum = require("../sumOfNumbers");

describe("tests", function() {
    it("Sum sum is a function", function() {
        expect(typeof sum).to.be.equal("function");
    });
})