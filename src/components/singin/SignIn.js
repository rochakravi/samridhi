import React, { Component } from "react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    console.log("email =>", this.state.email);
    console.log("password =>", this.state.password);
    alert("hello");
  };
  render() {
    return (
      <div className="sing-in">
        <form>
          <h1>Title</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input type="submit" value="Submit" />
          </form>
        </form>
      </div>
    );
  }
}

export default SignIn;
