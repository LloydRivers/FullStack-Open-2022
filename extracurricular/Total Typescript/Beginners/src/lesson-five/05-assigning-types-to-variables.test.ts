import {
  getUserId,
  defaultUser,
} from "./05-assigning-types-to-variables.problem";

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
