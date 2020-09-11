import React, { Component } from "react";
import Button from "../../ui-kit/button/button";
import Input from "../../ui-kit/input/input";
import "./SignIn.styles.scss";

class SignIn extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: "",
  //     password: "",
  //   };
  // }
  // handleChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  // handleSubmit = () => {
  //   console.log("email =>", this.state.email);
  //   console.log("password =>", this.state.password);
  //   alert("hello");
  // };

  render() {
    return (
      <div className="sing-in">
        <h1>Title</h1>
        {/* <form onSubmit={this.handleSubmit} className="form">
          <input
            className="input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />

          <input
            className="input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />

          <Button title="Add To Cart"></Button>
        </form> */}
      </div>
    );
  }
}

export default SignIn;
