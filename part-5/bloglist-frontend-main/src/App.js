import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Blog from "./components/Blog";
import { getAll, setToken } from "./utils/blogService";
import Login from "./components/Login";
import BlogForm from "./components/Blog_Form";
import Notification from "./components/Notification";

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [user_Alert_Message, set_User_Alert_Message] = useState(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("logged_in_user"));
    setUser(data);

    if (user || data) {
      setToken(data?.token);
      getAll().then((blogs) => setBlogs(blogs));
    }
  }, [render]);

  return (
    <div>
      <h1>Blogs</h1>

      {user_Alert_Message && <Notification message={user_Alert_Message} />}
      {user === null && (
        <Login
          setLoginVisible={setLoginVisible}
          loginVisible={loginVisible}
          set_User_Alert_Message={set_User_Alert_Message}
          setUser={setUser}
        />
      )}
      {user !== null && (
        <BlogForm
          setRender={setRender}
          user={user}
          set_User_Alert_Message={set_User_Alert_Message}
        />
      )}

      {/* <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div> */}
      {/* <ul>
        {notesToShow.map((note, i) => (
          <Note
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul> */}

      {/* <Footer /> */}
    </div>
  );
};

App.propTypes = {};

export default App;
