// An intersection type combines multiple types into a single type.
// It represents a type that has all the properties of the intersected types.

// Define the User interface with id, firstName, and lastName properties.
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// Define the Post interface with id, title, and body properties.
interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * getDefaultUserAndPosts function returns an object that is an intersection
 * of User and { posts: Post[] }. It represents a user object with an additional
 * posts property containing an array of Post objects.
 */
export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

// Call getDefaultUserAndPosts and assign the result to userAndPosts variable.
const userAndPosts = getDefaultUserAndPosts();

// Access the posts property of the userAndPosts object and log it to the console.
console.log(userAndPosts.posts[0]);
