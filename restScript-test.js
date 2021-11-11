beforeAll( () => {
    values.amount = 1000;
    values.years = 1;
    values.rate = 10;
  })
  describe("my first suite", function() {

    it('should calculate the monthly rate correctly', function () {
        // const values = {
        //   amount: 1000,
        //   years: 1,
        //   rate: 10,
        // }
        expect(calculateMonthlyPayment(values)).toBeCloseTo(134.99, 1)
      });

  })
  
  
  
  
  
  afterAll( () => {
    values = {};
  })
 