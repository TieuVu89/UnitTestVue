import mutations from "@/store/mutations";

it("increment increments state.count by 1", () => {
  const state = {
    count: 0,
  };
  mutations.increment(state);
  expect(state.count).toBe(1);
});
