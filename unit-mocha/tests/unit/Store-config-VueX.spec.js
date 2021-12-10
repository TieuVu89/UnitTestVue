import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "@/store//store-config";
import { cloneDeep } from "lodash";
import { expect } from "chai";

it("increments count value when increment is commited", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  expect(store.getters["counter/count"]).to.be.equal(0);
  store.commit("counter/increment");
  expect(store.getters["counter/count"]).to.be.equal(1);
});

it("updates evenOrOdd getter when increment is commited", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  expect(store.getters["counter/evenOrOdd"]).to.be.equal("even");
  store.commit("counter/increment");
  expect(store.getters["counter/evenOrOdd"]).to.be.equal("odd");
});

it("modules include counterModule", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(cloneDeep(storeConfig));
  expect(Object.keys(store.getters)).to.include("counter/evenOrOdd");
});
