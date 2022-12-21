// Redux
import { useDispatch } from "react-redux";
import { logUserIn } from "../../features/slices/loginSlice";

// Custom hooks
import { useField } from "../../hooks/index";

// Material UI
import { TextField, Button } from "@mui/material";

// Components
import Notification from "../Notification/Notification";

const LoginForm = () => {
  const { reset: resetUsername, ...username } = useField("text");
  const { reset: resetPassword, ...password } = useField("password");

  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = {
      username: username.value,
      password: password.value,
    };
    dispatch(logUserIn(credentials));
    resetUsername();
    resetPassword();
  };

  return (
    <div>
      <h2 className="header-title">Blogs App</h2>
      <Notification />
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          <TextField label="username" {...username} />
        </div>
        <div>
          <TextField label="password" {...password} />
        </div>
        <Button variant="contained" color="primary" type="submit">
          login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
