import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Module from "@/components/Module";
import myModule from "@/store/myModule";
import { expect } from "chai";
import sinon from "sinon";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Modules.vue", () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      clicks: 2,
    };

    actions = {
      moduleActionClick: sinon.spy(),
    };

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          getters: myModule.getters,
        },
      },
    });
  });

  it("calls store action moduleActionClick when button is clicked", () => {
    const wrapper = shallowMount(Module, { store, localVue });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(actions.moduleActionClick.called).to.be.true;
  });

  it("renders state.inputValue in first p tag", () => {
    const wrapper = shallowMount(Module, { store, localVue });
    const p = wrapper.find("p");
    expect(p.text()).to.be.equal(state.clicks.toString());
  });
});
