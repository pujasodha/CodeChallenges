const sortByLength = require("./app");

describe("sortByLength",function(){
    it("Test 1",function(){
      expect(sortByLength(["Beg", "Life", "I", "To"])).toEqual(["I", "To", "Beg", "Life"]);
    });

    it("Test 2",function(){
      expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toEqual(["", "Pizza", "Brains", "Moderately"]);
    });

    it("Test 3",function(){
      expect(sortByLength(["Longer", "Longest", "Short"])).toEqual(["Short", "Longer", "Longest"]);
    });
  });