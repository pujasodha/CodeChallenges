const scramble = require("./app");

describe("Scramble", function () {
    it("world", () => {
        expect(scramble("rkqodlw", "world")).toBeTruthy();
    });

    it("codewars", function () {
        expect(scramble("cedewaraaossoqqyt", "codewars")).toBeTruthy();
    });

    it("steak", function () {
        expect(scramble("katas", "steak")).toEqual(false);
    });

    it("javascript", function(){
        expect(scramble("scriptjava","javascript")).toEqual(true);
    });

    it("javascript", function(){
      expect(scramble("scriptingjava","javascript")).toEqual(true);
    });
    
    it("javascripts", function(){
      expect(scramble("scriptsjava","javascripts")).toEqual(true);
    });
    
    it("javascript", function(){
      expect(scramble("jscripts","javascript")).toEqual(false);
    });
    
    it("commas", function(){
      expect(scramble("aabbcamaomsccdd","commas")).toEqual(true);
    });

    // TODO make test for works with double letter
    it("double letters", function(){
        expect(scramble("asynoymabbcamaomsccdd","synonym")).toEqual(false);
      });
});

