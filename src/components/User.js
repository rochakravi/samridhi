import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    return (
      <div>
        <p>user </p>
        <p>{this.props.authanticated}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authanticated: state.user.isAuth,
  };
};

export default connect(mapStateToProps)(User);
