import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { signInWithGoogle } from "./../firebase/firebase.util";
import { Route, Link } from "react-router-dom";
//import Button from "./../ui-kit/button";
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
          <>
            <button onClick={this.props.login}>Login</button>
            <button onClick={signInWithGoogle}>Login with google</button>
            {/* <Button title="Login" onclick={this.props.login}></Button> */}
          </>
        )}

        <button onClick={() => this.props.history.push("/cart")}>
          Go To Cart
        </button>
        <Link to="/wishlist">wishlist</Link>
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
