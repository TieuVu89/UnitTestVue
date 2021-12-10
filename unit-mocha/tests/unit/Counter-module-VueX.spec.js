import counterModule from "@/store/counter-module";
import { expect } from "chai";
import sinon from "sinon";

describe("counterModule/getters", () => {
  it("evenOrOdd returns even if state.count is even", () => {
    const state = {
      count: 2,
    };
    expect(counterModule.getters.evenOrOdd(state)).to.be.equal("even");
  });

  it("evenOrOdd returns odd if state.count is even", () => {
    const state = {
      count: 1,
    };
    expect(counterModule.getters.evenOrOdd(state)).to.be.equal("odd");
  });
});

describe("counterModule/mutations", () => {
  it("increment increments state.count by 1", () => {
    const state = {
      count: 0,
    };
    counterModule.mutations.increment(state);
    expect(state.count).to.be.equal(1);
  });
});

describe("counterModule/actions", () => {
  it("getCountFromServer commits setCount mutation", async () => {
    const commit = sinon.spy();
    await counterModule.actions.getCountFromServer(commit);
    expect(commit.calledWithExactly("setValue", 5));
  });
});
