import { random } from "../src/random";

test("should be a string", () => {
  expect(typeof random()).toBe("string");
});
