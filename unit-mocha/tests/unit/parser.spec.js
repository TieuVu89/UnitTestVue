import { expect } from "chai";

describe("so sanh value ", () => {
  it("value co gia tri bang nhau ", () => {
    expect(1 + 1).to.be.equal(2);
    expect([1, 2, 3]).to.be.lengthOf(3);
    expect(true).to.be.true;
  });
  it("kiem tra chuoi", () => {
    expect("DoanTC").to.be.contain("TC");
    expect("DoanTC").to.be.match(/TC/);
  });
  it("So sanh hon", () => {
    expect(5).to.be.greaterThan(3);
    expect(3).to.be.lessThan(5);
    expect(3).to.be.not.greaterThan(10);
  });
});
