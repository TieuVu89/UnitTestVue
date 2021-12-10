import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import GetData from "@/components/GetData";
import moxios from "moxios";

// mocha + axios
// mocha + axios = moxios
describe("test async", () => {
  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it("test get data ", (done) => {
    let wrapper = shallowMount(GetData);
    moxios.stubRequest("/user", {
      status: 200,
      response: { user: "DoanTC" },
    });
    moxios.wait(() => {
      expect(wrapper.find("#app").text()).to.be.contain("DoanTC");
      done();
    });
  });
});
