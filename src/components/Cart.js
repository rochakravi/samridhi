import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <div>
        <p>Cart Items</p>
        <ul>
          {this.props.carItemsData.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carItemsData: state.items,
  };
};

export default connect(mapStateToProps)(Cart);
