function testSample(){

  describe("Example Tests", function(){
    it("Some Cases", function(){
      Test.assertSimilar(shortestArrang(10),[4, 3, 2, 1]);
      Test.assertSimilar(shortestArrang(14),[5, 4, 3, 2]);
      Test.assertSimilar(shortestArrang(16),[-1]);
      Test.assertSimilar(shortestArrang(22),[7, 6, 5, 4]);
      Test.assertSimilar(shortestArrang(65),[33, 32]);
    });
  });
  
}

function shortestArrang(n) {
    // your code here
    return [];
};
