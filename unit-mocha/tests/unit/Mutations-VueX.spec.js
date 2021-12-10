import mutations from "@/store/mutations";
import { expect } from "chai";

it("increment increments state.count by 1", () => {
  const state = {
    count: 0,
  };
  mutations.increment(state);
  expect(state.count).to.be.equal(1);
});
