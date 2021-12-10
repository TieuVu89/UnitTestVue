import Vue from "vue";
import SetPropComponent from "@/components/SetProp.vue";
import { shallowMount } from "@vue/test-utils";

function mountComponentWithProps(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData,
  }).$mount();

  return vm.$el;
}

describe("SetPropComponent.vue", () => {
  it("should be the correct color", () => {
    const headingData = mountComponentWithProps(SetPropComponent, {
      color: "blue",
    });
    const styleData = headingData.style.getPropertyValue("color");
    expect(styleData).toEqual("blue");
  });

  it("should have the correct title", async () => {
    const wrapper = shallowMount(SetPropComponent);
    await wrapper.setProps({ title: "Hello, Vue!" });
    expect(wrapper.text()).toEqual("Hello, Vue!");
  });
});
