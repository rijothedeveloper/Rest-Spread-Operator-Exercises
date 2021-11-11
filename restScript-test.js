beforeAll( () => {
    
  })
  describe("Refactor it to use the rest operator & an arrow function", function() {

    it('should filter out odds', function () {
        
        expect(filterOutOdds(1,2,3,4,5,6,7)).toEqual([2, 4, 6])
      });

  })
  

  describe("Write a function called findMin that accepts a variable number of arguments and returns the smallest argument", function() {

    it('should find min', function () {
        
      expect(findMin(1,2,3,4,5,6,7)).toEqual(1)
    });

  });
  
  describe("mergeObjects", function() {

    it("mergeObjects that accepts two objects and returns a new merged object", function() {
      expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
    })

  })
  
  describe("doubleAndReturnArgs", function() {

    it("doubleAndReturnArgs", function() {
      expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
      expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8]);
    })

  })

  describe("slice and dice", function() {

    it("everything together", function() {
      expect(extend([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
      expect(addKeyVal({a:1,b:2},'c',3)).toEqual({a:1,b:2,c:3});
    })

  })
  
  afterAll( () => {
    
  })
 