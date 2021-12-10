import getters from "@/store/getters";
import { expect } from "chai";

it("evenOrOdd returns even if state.count is even", () => {
  const state = {
    count: 2,
  };
  expect(getters.evenOrOdd(state)).to.be.equal("even");
});

it("evenOrOdd returns odd if state.count is even", () => {
  const state = {
    count: 1,
  };
  expect(getters.evenOrOdd(state)).to.be.equal("odd");
});
