const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);
describe("when there is initially some notes saved", () => {
  test("notes are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("Exact Number of Blogs", async () => {
    const response = await api.get("/api/blogs");
    expect(response.body).toHaveLength(2);
  });
  test("test that verifies that the unique identifier property of the blog posts is named id", async () => {
    const response = await api.get("/api/blogs");
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
  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);
  const response = await api.get("/api/blogs");
  const contents = response.body.map((r) => r.title);
  expect(response.body).toHaveLength(4);
  expect(contents).toContain("test");
});
test("if the likes property is missing from the request, it will default to the value 0", async () => {
  const newBlog = {
    title: "test",
    author: "test",
    url: "test",
  };
  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);
  const response = await api.get("/api/blogs");
  const contents = response.body.map((r) => r.likes);
  expect(response.body).toHaveLength(4);
  expect(contents).toContain(0);
});

describe("addition of a new blog", () => {
  test("if the title and url properties are missing from the request data, the backend responds to the request with the status code 400 Bad Request", async () => {
    const newBlog = {
      author: "test",
    };
    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(400)
      .expect("Content-Type", /application\/json/);
    const response = await api.get("/api/blogs");
    const contents = response.body.map((r) => r.title);
    expect(contents).not.toContain("test");
  });
});

describe("implement functionality for deleting a single blog post resource", () => {
  test("deleting a single blog post", async () => {
    const response = await api.get("/api/blogs");
    const id = response.body[0].id;
    await api.delete(`/api/blogs/${id}`).expect(204);
    const response2 = await api.get("/api/blogs");
    expect(response2.body).toHaveLength(response.body.length - 1);
  });
});

describe("implement functionality for updating a single blog post resource", () => {
  test("updating a single blog post", async () => {
    const response = await api.get("/api/blogs");
    const id = response.body[0].id;
    const newBlog = {
      title: "test",
      author: "test",
      url: "test",
      likes: 10,
    };
    await api.put(`/api/blogs/${id}`).send(newBlog).expect(200);
    const response2 = await api.get("/api/blogs");
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
    const response = await api.post("/api/login").send(newUser);
    token = response.body.token;
  });

  test("invalid token", async () => {
    const newBlog = {
      title: "test",
      author: "test",
      url: "test",
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
