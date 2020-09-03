import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class User extends Component {
  render() {
    return (
      <div>
        {this.props.authanticated ? (
          <h1>Welcome User </h1>
        ) : (
          <h1>Welcome Guest</h1>
        )}
        {this.props.authanticated ? (
          <button onClick={this.props.logout}>Logout</button>
        ) : (
          <button onClick={this.props.login}>Login</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authanticated: state.user.isAuth,
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
