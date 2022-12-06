const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  const favorite = blogs.reduce((favorite, blog) => {
    if (blog.likes > favorite.likes) {
      return blog;
    }
    return favorite;
  }, blogs[0]);
  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  };
};

const mostBlogs = (blogs) => {
  // We first loop over the blogs array.
  const authors = blogs.reduce((authors, blog) => {
    // Since we are starting with an empty object, the check if (authors[blog.author]) will fail, and the else block will be executed.
    if (authors[blog.author]) {
      authors[blog.author] += 1;
    } else {
      // Once this code is executed, the object now looks like this { 'Michael Chan': 1 }. Since we are in a loop, the code will be executed over and over (until the length of the array is reached). The final object will look something like this { 'Michael Chan': 1, 'Edsger W. Dijkstra': 2, 'Me': 1 }.
      authors[blog.author] = 1;
    }
    return authors;
  }, {});

  // Object.key looks like this: ['Michael Chan', 'Edsger W. Dijkstra', 'Me']
  const author = Object.keys(authors).reduce((author, key) => {
    // On the first loop authors[key] will be 1, and author.blogs will be undefined. Since 1 is not greater than undefined, the else block will be executed. The author variable will now be set to 'Michael Chan'.
    if (authors[key] > author.blogs) {
      return { author: key, blogs: authors[key] };
    }
    return { author: key, blogs: authors[key] };
  }, {});

  console.log("author", author);

  return author;
};

const mostLikes = (blogs) => {
  const authors = blogs.reduce((authors, blog) => {
    if (authors[blog.author]) {
      authors[blog.author] += blog.likes;
    } else {
      authors[blog.author] = blog.likes;
    }
    return authors;
  }, {});

  let author = { author: "", likes: 0 };
  for (const key in authors) {
    if (authors[key] > author.likes) {
      author = { author: key, likes: authors[key] };
    }
  }

  return author;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
