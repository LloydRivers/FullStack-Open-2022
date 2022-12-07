const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpZCI6IjYzOTA0MmNkZDhhMDRkYTFlMTQzNGU3YyIsImlhdCI6MTY3MDM5ODcwNCwiZXhwIjoxNjcwNDAyMzA0fQ.pgONm6r4hG1CGfFIGdsTk-gShcubSF_la2wkbzy_GQ0";

const api = supertest(app);
describe("when there is initially some notes saved", () => {
  test("notes are returned as json", async () => {
    await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Exact Number of Blogs", async () => {
    const response = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    expect(response.body).toHaveLength(response.body.length);
  });
  test("test that verifies that the unique identifier property of the blog posts is named id", async () => {
    const response = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    expect(response.body[0].id).toBeDefined();
  });
});
test("a valid blog can be added", async () => {
  const newBlog = {
    title: "test",
    author: "test",
    url: "test",
    likes: 0,
  };
  const response = await api
    .get("/api/blogs")
    .set("Authorization", `bearer ${token}`);
  await api
    .post("/api/blogs")
    .send(newBlog)
    .set("Authorization", `bearer ${token}`)
    .expect(201)
    .expect("Content-Type", /application\/json/);
  const response_two = await api
    .get("/api/blogs")
    .set("Authorization", `bearer ${token}`);
  const contents = response_two.body.map((r) => r.title);
  expect(response_two.body).toHaveLength(response.body.length + 1);
  expect(contents).toContain("test");
});
test("if the likes property is missing from the request, it will default to the value 0", async () => {
  const newBlog = {
    title: "test",
    author: "test",
    url: "test",
  };
  const response = await api
    .get("/api/blogs")
    .set("Authorization", `bearer ${token}`); //10
  await api
    .post("/api/blogs")
    .set("Authorization", `bearer ${token}`)
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);
  // 11
  const response_two = await api
    .get("/api/blogs")
    .set("Authorization", `bearer ${token}`);
  // 11
  const contents = response_two.body.map((r) => r.likes);
  expect(response_two.body).toHaveLength(response.body.length + 1);
  expect(contents).toContain(0);
});

describe("addition of a new blog", () => {
  test("if the title and url properties are missing from the request data, the backend responds to the request with the status code 400 Bad Request", async () => {
    const newBlog = {
      author: "Terry Tinker",
    };
    await api
      .post("/api/blogs")
      .set("Authorization", `bearer ${token}`)
      .send(newBlog)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    const response = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    const contents = response.body.map((r) => r.author);
    expect(contents).not.toContain("Terry Tinker");
  });
});

describe("implement functionality for deleting a single blog post resource", () => {
  test("deleting a single blog post", async () => {
    const response = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    const id = response.body[0].id;
    await api
      .delete(`/api/blogs/${id}`)
      .expect(204)
      .set("Authorization", `bearer ${token}`);
    const response2 = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    expect(response2.body).toHaveLength(response.body.length - 1);
  });
});

describe("implement functionality for updating a single blog post resource", () => {
  test("updating a single blog post", async () => {
    const response = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    const id = response.body[0].id;
    const newBlog = {
      title: "test",
      author: "test",
      url: "test",
      likes: 10,
    };
    await api
      .put(`/api/blogs/${id}`)
      .set("Authorization", `bearer ${token}`)
      .send(newBlog)
      .expect(200);
    const response2 = await api
      .get("/api/blogs")
      .set("Authorization", `bearer ${token}`);
    expect(response2.body).toHaveLength(response.body.length);
  });
});

describe("check that invalid users are not created and invalid add user operation returns a suitable status code and error message.", () => {
  test("invalid user", async () => {
    const newUser = {
      username: "te",
      name: "te",
      password: "test",
    };
    await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);
  });
});

describe("user must have a valid token to create a new blog", () => {
  let token;

  beforeEach(async () => {
    const newUser = {
      username: "test",
      name: "test",
      password: "test",
    };
    await api.post("/api/users").send(newUser);
    const response = await api
      .post("/api/login")
      .set("Authorization", `bearer ${token}`)
      .send(newUser);
    token = response.body.token;
  });

  test("invalid token", async () => {
    const newBlog = {
      title: "BodyBuilding",
      author: "Peter Pan",
      url: "www.test.com",
      likes: 0,
    };
    await api
      .post("/api/blogs")
      .set("Authorization", `Bearer ${token}`)
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
