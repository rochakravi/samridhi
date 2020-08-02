import React from "react";
import SongList from "./SongList";
import BagItem from "./BagItem";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <Counter />
          {/* <SongList /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
