import React from "react";
import TodoList from "./todo/todoList";
import ContactList from "./contact/contactList";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo/todoList">Todo list</Link>
        </li>
        <li>
          <Link to="/contact/contactList">Contact list</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/todo/todoList" component={Todo} />
      <Route path="/contact/contactList" component={Contact} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Todo  = () => (
  <div>
    <TodoList />
  </div>
);
const Contact  = () => (
  <div>
    <ContactList />
  </div>
);
export default App;
