import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SongList from "./SongList";
import BagItem from "./BagItem";
import Counter from "./Counter";
import Cart from "./Cart";
import Card from "./Card";
import User from "./User";
import Test from "./Test";
import Parent from "./parent";

const App = () => {
  return (
    <Router>
      <Link to="/songs">Songs</Link>
      <Link to="/user">Profile</Link>
    </Router>
  );
};

export default App;
