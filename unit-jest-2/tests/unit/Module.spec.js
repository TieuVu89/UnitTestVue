import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Module from "@/components/Module";
import myModule from "@/store/myModule";

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
      moduleActionClick: jest.fn(),
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
    expect(actions.moduleActionClick).toHaveBeenCalled();
  });

  it("renders state.inputValue in first p tag", () => {
    const wrapper = shallowMount(Module, { store, localVue });
    const p = wrapper.find("p");
    expect(p.text()).toBe(state.clicks.toString());
  });
});
