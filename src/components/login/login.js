import React, { Component } from "react";
import { connect } from "react-redux";

export class login extends Component {
  constructor() {
    super();
  }

  login = () => {
    let item = {
      name: "achal",
    };
    this.props.login(item);
    setTimeout(() => {
      alert("Successfully : " + this.props.user);
      alert("Successfully : " + this.props.name);
    }, 5000);
  };
  test = () => {
    alert("Successfully : " + this.props.user);
    alert("Successfully : " + this.props.name);
  };
  render() {
    return (
      <div>
        <input type="button" value="Login" onClick={this.login}></input>
        <input type="button" value="Test" onClick={this.test}></input>
        {this.props.items.map((item) => {
          return <p key={item.name}>{item.name}</p>;
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.isAuth,
    name: state.user.name,
    items: state.user.users,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    login: (item) =>
      dispatch({
        type: "LOGIN",
        payload: item,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(login);
