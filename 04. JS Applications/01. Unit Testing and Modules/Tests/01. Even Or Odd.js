let expect = require('chai').expect;
let isOddOrEven = require('../01. Even or Odd tests').isOddOrEven;

describe('testing isOddOrEven function', function () {
    // Bad cases:
    describe('testing the bad cases', function () {
        // Return undefined if we give a number for argument:
        it('should return undefined with a number as argument', function () {
            expect(isOddOrEven(69)).to.equal(undefined,
                "Function dod not return the correct result.");
        });
    });
    // Good Cases:
    describe('testing the good cases', function () {
        // Check Even:
        it('should return even if the given valid argument is with even length', function () {
            expect(isOddOrEven('even')).to.equal('even',
                'The argument "even" should be with even length!');
        });
        // Check Odd
        it('should return even if the given valid argument is with even length', function () {
            expect(isOddOrEven('odd')).to.equal('odd',
                'The argument "odd" should be with odd length!');
        });
    });
});