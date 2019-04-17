const longestPalindrome = require("./app");

describe("longestPalindrom", () => {
    it("", () => {
        expect(longestPalindrome("a")).toEqual(1);
    });

    it("", () => {
        expect(longestPalindrome("aa")).toEqual(2);
    });

    it("", () => {
        expect(longestPalindrome("baa")).toEqual(2);
    });

    it("", () => {
        expect(longestPalindrome("aab")).toEqual(2);
    });

    it("", () => {
        expect(longestPalindrome("baabcd")).toEqual(4);
    });

    it("", () => {
        expect(longestPalindrome("baablkj12345432133d")).toEqual(9);
    });

    it("", () => {
        expect(longestPalindrome("ba")).toEqual(1);
    });

    // it("Are you sure that is a palindrome?", () => {
    //     expect(longestPalindrome("zyabyz")).not(6);
    // });
});