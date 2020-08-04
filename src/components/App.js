import React from "react";
import SongList from "./SongList";
import BagItem from "./BagItem";
import Counter from "./Counter";
import Cart from "./Cart";
import Card from "./Card";
import User from "./User";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          {/* <Counter />        
          <p>Another component</p>
          <Cart />
          <Card />  */}
          <User />
        </div>
      </div>
    </div>
  );
};

export default App;
