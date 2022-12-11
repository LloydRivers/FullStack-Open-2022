import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import BlogList from "./BlogList";
import userEvent from "@testing-library/user-event";
describe("<BlogList />", () => {
  const blog = {
    title: "Test Title",
    author: "Test Author",
    url: "Test Url",
    likes: 0,
    user: {
      username: "username",
      name: "name",
    },
  };
  let component;
  beforeEach(() => {
    component = render(<BlogList key={blog.id} blog={blog} />);
  });
  test("renders title and author but not url or likes by default", () => {
    const title = component.container.querySelector(".title");
    expect(title).toHaveTextContent("Title: Test Title");
    const author = component.container.querySelector(".author");
    expect(author).toHaveTextContent("Author: Test Author");
    const url = component.container.querySelector(".url");
    expect(url).not.toBeInTheDocument();
    const likes = component.container.querySelector(".likes");
    expect(likes).not.toBeInTheDocument();
  });

  test("checks that the blog's url and number of likes are shown when the button controlling the shown details has been clicked.", () => {
    const button = component.container.querySelector(".view-button");
    fireEvent.click(button);

    const blogDetails = component.container.querySelector(".blog-details");
    expect(blogDetails).toBeInTheDocument();
  });

  test("checks that if the like button is clicked twice, the event handler is called twice.", async () => {
    const viewButton = component.container.querySelector(".view-button");
    fireEvent.click(viewButton);

    const likeButton = component.container.querySelector(".like-button");
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);

    const likes = component.container.querySelector(".likes");
    expect(likes).toHaveTextContent(`likes: ${blog.likes}`);
  });
});
