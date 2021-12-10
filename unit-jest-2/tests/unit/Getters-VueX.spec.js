import getters from "@/store/getters";

it("evenOrOdd returns even if state.count is even", () => {
  const state = {
    count: 2,
  };
  expect(getters.evenOrOdd(state)).toBe("even");
});

it("evenOrOdd returns odd if state.count is even", () => {
  const state = {
    count: 1,
  };
  expect(getters.evenOrOdd(state)).toBe("odd");
});
