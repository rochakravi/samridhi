import React from "react";
import SongList from "./SongList";
import BagItem from "./BagItem";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BagItem />
          {/* <SongList /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
