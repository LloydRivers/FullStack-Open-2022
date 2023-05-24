import { makeUser } from "./08-function-return-type-annotations-problem";

it("Should return a valid user", () => {
  const user = makeUser({
    id: 1,
    firstName: "Milly",
    lastName: "Millerson",
    role: "user",
    posts: [],
  });
  expect(typeof user.id).toBe("number");
  expect(typeof user.firstName).toBe("string");
  expect(typeof user.lastName).toBe("string");
  expect(user.role).toBe("user");

  expect(user.posts[0].id).toBeDefined();
  expect(user.posts[0].title).toBeDefined();
});
