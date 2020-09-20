import React, { Component } from "react";
import { connect } from "react-redux";

export class login extends Component {
  constructor() {
    super();
  }

  test = () => {
    alert("Successfully : " + this.props.user);
    alert("Successfully : " + this.props.name);
  };
  render() {
    return (
      <div>
        <input type="button" value="Login" onClick={this.props.login}></input>
        <input type="button" value="Test" onClick={this.test}></input>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user.isAuth, name: state.user.name };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    login: (item) =>
      dispatch({
        type: "LOGIN",
      }),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(login);
