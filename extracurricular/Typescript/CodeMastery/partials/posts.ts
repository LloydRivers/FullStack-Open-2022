/*
You are working on a blog application and need to implement a function called createPost that takes a partial Post object as an argument and returns a new Post object with the provided properties. The Post object has the following properties:
*/

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  published: boolean;
};

function createPost(post: Post, partialPost: Partial<Post>): Post {
  return {
    ...post,
    ...partialPost,
  };
}

const partial_post: Partial<Post> = {
  title: "Hello, World",
  published: false,
};
const existing_post: Post = {
  id: 1,
  title: "My first program",
  content: "",
  author: "Sam Sparks",
  published: false,
};
