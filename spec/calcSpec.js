describe("Calculator", function() {
    describe("Addition function", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
        it("should not return 4 if the arguments given don't produce a sum of 4", function() {
           expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function()  {
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        });
    });
 });
       
 
        
