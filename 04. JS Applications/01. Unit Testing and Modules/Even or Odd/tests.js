const expect = require("chai").expect;
const func = require("./solution");

describe("Even or Odd tests", () => {
    it("Should return even when string's length is even.", function () {
        expect(func("Balama")).equal("even")
    });

    it("Should return odd when string's length is odd.", () => {
        expect(func("Abdal")).equal("odd")
    });

    it("Should return undefined when the input is not string.", () => {
        expect(func(666)).equal(undefined);
        expect(func({})).equal(undefined);
        expect(func([1, 2, 3])).equal(undefined);
    });
});