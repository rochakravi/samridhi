import React, { Component } from "react";
import MenuItem from "./../menu/menu-item";
import SHOP_DATA from "./../../shopping-data";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.collections.map(({ title, id, items, routeName }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageUrl={items[2].imageUrl}
              routeName={routeName}
            ></MenuItem>
          );
        })}
      </div>
    );
  }
}

export default Directory;
