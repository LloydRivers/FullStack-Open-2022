// Redux
import { useDispatch } from "react-redux";
import { createBlog } from "../../features/slices/blogSlice";

// Custom hooks
import { useField } from "../../hooks/index";

// Material UI
import { TextField, Button } from "@mui/material";

const BlogForm = ({ togglableRef }) => {
  const { reset: resetTitle, ...title } = useField("text");
  const { reset: resetAuthor, ...author } = useField("text");
  const { reset: resetUrl, ...url } = useField("text");

  const dispatch = useDispatch();

  const handleCreateBlog = async (event) => {
    event.preventDefault();
    togglableRef.current.toggleVisibility();

    const newBlog = {
      title: title.value,
      author: author.value,
      url: url.value,
    };

    resetTitle();
    resetAuthor();
    resetUrl();

    dispatch(createBlog(newBlog));
  };

  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={handleCreateBlog}>
        <div>
          <TextField label="title" {...title} />
        </div>
        <div>
          <TextField label="author" {...author} />
        </div>
        <div>
          <TextField label="url" {...url} />
        </div>
        <Button variant="contained" color="primary" size="small" type="submit">
          create
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;
