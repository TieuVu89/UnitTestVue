import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Counter from "@/components/Counter";

describe("Test counter", () => {
  it("Test btn count on click", () => {
    let wrapper = mount(Counter);
    expect(wrapper.find("#count").text()).to.be.equal("10");

    wrapper.find("button").trigger("click");
    expect(wrapper.find("#count").text()).to.be.equal("11");
  });
});
