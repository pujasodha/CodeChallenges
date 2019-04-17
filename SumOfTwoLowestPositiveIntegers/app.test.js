const expect = require("chai").expect;
const sumTwoSmallestNumbers = require("./app");

describe("Your function", () => {
    it("should work for basic tests", () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).to.equal(13);
       
    });
    it("should work for basic tests", () => {
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).to.equal(6);
    });
    it("should work for basic tests", () => {
        expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).to.equal(10);
    });
    it("should work for basic tests", () => {
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).to.equal(24);
    });
    it("should work for basic tests", () => {
        expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).to.equal(16);
    });
});