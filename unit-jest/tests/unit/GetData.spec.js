import { shallowMount } from "@vue/test-utils";
import GetData from "@/components/GetData";
import Vue from "vue";

jest.mock("axios");
describe("jest  mock axios", () => {
  it("mock axios", () => {
    let wrapper = shallowMount(GetData);
    return Vue.nextTick().then(() => {
      expect(wrapper.text()).toMatch("DoanTC");
    });
  });
});
