import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Actions from "@/components/Actions";
import sinon from "sinon";
import { expect } from "chai";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Actions.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      actionClick: sinon.spy(),
      actionInput: sinon.spy(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });

  it("calls store action actionInput when input value is input and an input even is fired", () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "input";
    input.trigger("input");
    expect(actions.actionInput.called).to.be.true;
  });

  it("does not call store action actionInput when input value is not input and an input even is fired", () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    const input = wrapper.find("input");
    input.element.value = "not input";
    input.trigger("input");
    expect(actions.actionInput.called).to.be.false;
  });

  it("calls store action actionClick when button is clicked", () => {
    const wrapper = shallowMount(Actions, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(actions.actionClick.called).to.be.true;
  });
});
