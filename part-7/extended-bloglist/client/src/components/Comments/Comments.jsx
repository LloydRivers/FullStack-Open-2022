// Redux
import { useDispatch } from "react-redux";
import { createComment } from "../../features/slices/blogSlice";

// Custom hooks
import { useField } from "../../hooks/index";

// Material UI
import { Button, Grid, TextField } from "@mui/material";

const Comments = ({ blog }) => {
  const { reset: resetComment, ...comment } = useField("text");

  const dispatch = useDispatch();

  const { id, comments } = blog;

  const handleComment = (event) => {
    event.preventDefault();

    if (!comment.value.trim()) return;

    dispatch(createComment(id, comment.value.trim()));
    resetComment();
  };

  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={handleComment}>
        <Grid container>
          <Grid item>
            <TextField label="write your thoughts" size="small" {...comment} />
          </Grid>
          <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <Button variant="contained" color="primary" type="submit">
              add comment
            </Button>
          </Grid>
        </Grid>
      </form>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, i) => (
            <li key={i}>{comment}</li>
          ))}
        </ul>
      ) : (
        <p>no comments yet...</p>
      )}
    </div>
  );
};

export default Comments;
