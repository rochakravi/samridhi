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
import Wishlist from "./wishlist";

const App = () => {
  return (
    <Router>
      <Link to="/user">Profile |</Link>
      <Link to="/counter">Counter |</Link>
      <Link to="/songs">Songs |</Link>
      <Link to="/wishlist">Wishlist |</Link>
      <Link to="/bagitem">BagItem</Link>

      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/songs">
          <SongList />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/bagitem">
          <BagItem />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
