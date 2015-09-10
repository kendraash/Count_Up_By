describe("numberCounter", function() {
  it("returns false if only one input is entered", function() {
    expect(numberCounter(10)).to.equal(false)
  });
  it("returns false if upTo is less than countBy", function() {
    expect(numberCounter(1,5)).to.equal(false)
  });
});
