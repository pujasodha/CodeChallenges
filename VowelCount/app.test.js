const vowelCount = require ("./app");

describe("vowelCount", () => {
    it ("Input string", () => {
        expect(vowelCount("abracadabra")).toEqual(5)
    });
    
    it ("Input string with a space", () => {
        expect(vowelCount("pear tree")).toEqual(4)
    });

    it ("Input random jibers", () => {
        expect(vowelCount("o a kak ushakov lil vo kashu kakao")).toEqual(13)
    });

});
