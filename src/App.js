import React, { useState } from "react";
import Posts from "./features/users/Posts";
import Users from "./features/users/Users";
import Modal from "./features/users/Modal";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <span className="link" onClick={() => setIsOpen(true)}>
        ALBUMS
      </span>
      {isOpen && <Modal open={isOpen} onClose={() => setIsOpen(false)} />}

      <Router>
        <NavLink className="link" exact to="proxysellertest/">
          USERS
        </NavLink>
        <NavLink className="link" to="proxysellertest/posts">
          POSTS
        </NavLink>

        <Routes>
          <Route exact path="proxysellertest/" element={<Users />}></Route>
          <Route path="proxysellertest/posts" element={<Posts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
