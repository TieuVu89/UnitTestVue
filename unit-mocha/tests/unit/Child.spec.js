import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
// import { mount } from '@vue/test-utils';
import Parent from "@/components/Parent";
import Child from "@/components/Child";
// mocha + chai + sinon
import sinon from "sinon";

describe("passing emit", () => {
  it("$emit show", () => {
    let wrapper = shallowMount(Parent);
    wrapper.setData({ isShow: false });
    expect(wrapper.find("#content").exists()).to.be.false;
    wrapper.find(Child).vm.$emit("show");
    expect(wrapper.find("#content").exists()).to.be.true;
  });
});

describe("child component call fn when click button ", () => {
  let cb = sinon.spy();
  let wrapper = shallowMount(Child, {
    propsData: { fn: cb },
  });
  wrapper.find("button").trigger("click");
  expect(cb.getCall(0).args[0]).to.be.equal("123");
  expect(cb.callCount).to.be.equal(2);
});
