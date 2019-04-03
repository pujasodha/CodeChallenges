const assert = require("assert");
const expect = require("chai").expect;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

//Require in file
const CanYouGetTheLoop = require('../CanYouGetTheLoop/app');

describe('Array', function () {
    describe('CanYouGetTheLoop', function () {
        it('returns length of loop', function () {
            expect(CanYouGetTheLoop()).to.equal('');
        });
    });
});