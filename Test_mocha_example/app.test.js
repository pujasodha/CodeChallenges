/**
 * $ npm run mocha ./Test_mocha_example
 */

const assert = require("assert");
const expect = require("chai").expect;
const returnsSameThing = require("./app");

describe("returnsSameThing with assert", function () {
    it("Example Test #1", function () {
        assert.strictEqual(returnsSameThing("hello"), "hello");
    });
    it("Example Test #2", function () {
        assert.strictEqual(returnsSameThing("hello"), "hello");
    });
});


describe("returnsSameThing with expect", function () {
    it("Example Test #1", function () {
        expect(returnsSameThing("hello")).to.equal("hello");
    });
    it("Example Test #2", function () {
        expect(returnsSameThing("hello")).to.equal("hello");
    });
});