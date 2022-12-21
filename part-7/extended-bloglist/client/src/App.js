// Hooks
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "./features/slices/loginSlice";

// Material UI
import { Container } from "@mui/material";

// Components
import { Routing, LoginForm } from "components";
import userService from "./services/users";

import { login } from "./features/slices/loginSlice";
import { initializeUsers } from "./features/slices/userSlice";
import { initializeBlogs } from "./features/slices/blogSlice";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectLogin);

  useEffect(() => {
    const userFromStorage = userService.getUser();
    if (userFromStorage) {
      dispatch(login(userFromStorage));
    }
  }, []);

  useEffect(() => {
    dispatch(initializeUsers());
    dispatch(initializeBlogs());
  }, []);

  if (user === null) {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  } else {
    return <Routing />;
  }
};

export default App;
