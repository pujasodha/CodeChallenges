const getDivisorsCnt = require("./app");

describe("getDivisorsCnt", () => {
    it("1 = 1 -- 1", () => {
        expect(getDivisorsCnt(1)).toEqual(1);
    });

    it("4  = 3 -- 1, 2, 4", () => {
        expect(getDivisorsCnt(4)).toEqual(3);
    });

    it("5  = 2 -- 1, 5", () => {
        expect(getDivisorsCnt(5)).toEqual(2);
    });

    it("10 = 4 -- 1, 2, 5, 10", () => {
        expect(getDivisorsCnt(10)).toEqual(4);
    });

    it("11 = 1 -- 1, 11", () => {
        expect(getDivisorsCnt(11)).toEqual(2);
    });
    
    it("12 = 6 -- 1, 2, 3, 4, 6, 12", () => {
        expect(getDivisorsCnt(12)).toEqual(6);
    });

    it("30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30", () => {
        expect(getDivisorsCnt(30)).toEqual(8);
    });

    it("54 = 8 -- 1, 2, 3, 6, 9, 18, 27, 54", () => {
        expect(getDivisorsCnt(54)).toEqual(8);
    });
});
