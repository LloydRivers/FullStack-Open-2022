import { guitarists } from "./10-set.problem";

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toBe(true);
  expect(guitarists.has("Eric Clapton")).toBe(true);
});

// it("Should give a type error when you try to pass a non-string", () => {
//   // @ts-expect-error
//   guitarists.add(2);
// });

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);
  expect(
    guitaristsAsArray.every((guitarist) => typeof guitarist === "string")
  ).toBe(true);
});
