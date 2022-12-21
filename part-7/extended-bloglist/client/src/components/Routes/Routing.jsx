// Hooks
import React, { useRef } from "react";

// Redux
import { useSelector } from "react-redux";
import { selectLogin } from "features/slices/loginSlice";

// Router
import { Routes, Route } from "react-router-dom";

// Material UI
import { Container } from "@mui/material";

// Components
import {
  Blog,
  BlogForm,
  BlogList,
  Greeting,
  NavBar,
  Notification,
  Togglable,
  User,
  Users,
} from "components";

const Routing = () => {
  const blogFormRef = useRef();
  const user = useSelector(selectLogin);
  return (
    <Container>
      <NavBar />
      <Greeting name={user.name} />
      <Notification />
      <Togglable buttonLabel="new blog" ref={blogFormRef}>
        <BlogForm togglableRef={blogFormRef} />
      </Togglable>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Container>
  );
};

export default Routing;
