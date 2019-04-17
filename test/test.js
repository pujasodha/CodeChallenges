const assert = require("assert");
const expect = require("chai").expect;

/**
 * Mocha Chai Test #1
 * 
 * Running sample test from root folder
 */
describe("Array", function () {
    describe("#indexOf()", function () {
        it("should return -1 when the value is not present", function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

/**
 * Mocha Chai Test #2
 * 
 * Requiring in the file to test the app
 */
const SquareEveryDigit = require("../SquareEveryDigit/app");

describe("Numbers", function () {
    describe("SquareEveryDigit", function () {
        it("Square digits", function () {
            assert.equal(SquareEveryDigit(9119), 811181);
        });
    });
});