import { Post } from "./types";
import { posts } from "./data";
/*
Your task:
Provide the type or interface for the given data structure.
Write a function that takes an array of objects of this type as input and filters out the objects based on a given tag.

Data Structure:
{
  id: number,
  title: string,
  tags: string[]
}


*/

const filterByTag = (posts: Post[], tag: string): Post[] => {
  return posts.filter((post: Post) => post.tags.includes(tag));
};

console.log(filterByTag(posts, "planet"));
