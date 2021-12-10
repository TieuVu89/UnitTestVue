import Parent from "@/components/Parent";
import Child from "@/components/Child";
import { shallowMount, mount } from "@vue/test-utils";

describe("passing emit", () => {
  it("$emit show", async () => {
    let wrapper = shallowMount(Parent);
    wrapper.setData({ isShow: false });
    expect(wrapper.find("#content").exists()).toBe(false);
    wrapper.findComponent(Child).vm.$emit("show");
    await wrapper.vm.$nextTick();
    expect(wrapper.find("#content").exists()).toBe(true);
  });
});
describe("child component call fn when click button ", () => {
  const cb = jest.fn();
  let wrapper = shallowMount(Child, {
    propsData: { fn: cb },
  });
  wrapper.find("button").trigger("click");
  expect(cb.mock.calls[0][0]).toBe("123");
  expect(cb.mock.calls.length).toBe(2);
});
