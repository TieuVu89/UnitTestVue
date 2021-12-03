import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld";

describe("HelloWorld.vue", () => {
  it("so sánh bằng", () => {
    expect(1 + 1).toBe(2);
    expect({ name: "DoanTC" }).toEqual({ name: "DoanTC" });
    expect([1, 2, 3]).toHaveLength(3);
  });
  it("so sánh value lớn bé", () => {
    expect(3).toBeGreaterThan(2);
    expect(2).toBeLessThan(3);
  });
  it("chuỗi bao gồm", () => {
    expect("DoanTC").toContain("TC");
  });
});
