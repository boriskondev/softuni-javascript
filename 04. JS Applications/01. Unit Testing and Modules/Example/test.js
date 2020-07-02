const expect = require("chai").expect;
const app = require("./app");

describe("Main functionality", function () {
    it("Should return 5", function () {
        expect(app.getNumber()).to.equal(5);
    });

    it("Adding 3 and 5 should return 8", function () {
        expect(app.addNumbers(5, 3)).to.equal(8);
    });
})