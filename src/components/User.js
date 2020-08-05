import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    return (
      <div>
        <p>user </p>
        <p>{this.props.authanticated}</p>
        <button onClick={this.props.login}>Login</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authanticated: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch({ type: "LOGIN" });
    },
    logout: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
