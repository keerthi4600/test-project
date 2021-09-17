describe("Evaluation",function(){
    it("Evaluating the expressions", function(){
        expect(eval("2+3")).toEqual(5);
        expect(eval("2-3")).toEqual(-1);
        expect(eval("9/3")).toEqual(3);
        expect(eval("2*3")).toEqual(6);
    })
})