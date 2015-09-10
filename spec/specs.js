describe("numberCounter", function() {
  it("returns false if only one input is entered", function() {
    expect(numberCounter(10)).to.equal("please provide valid values")
  });
  it("returns false if upTo is less than countBy", function() {
    expect(numberCounter(1,5)).to.equal("please provide valid values")
  });
  it("returns the output for counting to upTo by countBy", function() {
    expect(numberCounter(10,2)).to.eql([2,4,6,8,10])
  });
});
