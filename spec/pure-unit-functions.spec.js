import { greet } from "../pure-unit-functions.js";

describe("greet", () => {
  it("should greet by name & surname", () => {
    expect(greet("Lorem", "Ipsum")).toEqual("Hello Lorem Ipsum!");
  });
});
