/**
 * $ npm run mocha ./Array.diff
 */

const expect = require("chai").expect;
const array_diff = require("./app");

describe("array_diff Refactored", function () {

    it("a was [], b was [4,5]", function () {
        expect(array_diff([], [4, 5])).to.eql([]);
    });

    it("a was [3,4], b was [3]", function () {
        expect(array_diff([3, 4], [3])).to.deep.equal([4]);
    });

    it("a was [1,8,2], b was []", function () {
        expect(array_diff([1, 8, 2], [])).to.have.ordered.members([1, 8, 2]);
    });

    it("a was [1,2], b was [1]", function () {
        expect(array_diff([1,2],[1])).to.have.members([2]);
    });
    

    it("a was [1,2,2,2,3], b was [2]", function () {
        expect(array_diff([1,2,2,2,3],[2])).to.eql([1,3]);
    });
}); 
