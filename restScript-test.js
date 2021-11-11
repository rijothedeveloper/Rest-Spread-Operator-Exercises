beforeAll( () => {
    values.amount = 1000;
    values.years = 1;
    values.rate = 10;
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
  
  
  
  
  afterAll( () => {
    values = {};
  })
 