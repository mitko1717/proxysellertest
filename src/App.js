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
        <NavLink className="link" to="/">
          USERS
        </NavLink>
        <NavLink className="link" to="/posts">
          POSTS
        </NavLink>

        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* Используя API https://jsonplaceholder.typicode.com/ создать приложение.

Что нужно сделать:
Используя запрос /users вывести список пользователей

Действия на элементе  пользователя:
При нажати на кнопку “посты” отобразить его посты (/posts), 
на отдельной страничке

При нажати на кнопку “альбомы” отобразить его альбомы (/albums), 
в модальном окне

Технологии которые необходимо использовать:
ReactJS
Redux Toolkit */
