// The method we want to test
function add(x, y) {
    return x + y
  }
  
  // A test suite
  describe("add method", () => {
  
    // A unit test
    it("should return 2", () => {
      // 4. An assertion
      expect(add(1, 1)).toBe(2)
    })
  })


 