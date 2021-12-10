import { mount } from "@vue/test-utils";

import Counter from "@/components/Counter";

describe("Test counter", () => {
  it("Test btn count on click", async () => {
    let wrapper = mount(Counter);
    expect(wrapper.find("#count").text()).toEqual("10");

    await wrapper.find("button").trigger("click");
    expect(wrapper.find("#count").text()).toEqual("11");
  });
});
