import { greet } from "../pure-unit-functions";

describe("greet", () => {
  it("should greet by name & surname", () => {
    expect(greet("Lorem", "Ipsum")).toEqual("Hello Lorem Ipsum!");
  });
});
