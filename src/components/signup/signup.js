import React from "react";
import "./signUp.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", fullName: "" };
  }
  handleChange = (event) => {
    // alert("hello");
    this.setState({ ...this.state, [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ ...this.state, fullName: "", email: "", password: "" });
  };
  render() {
    return (
      <div>
        <h1>Sign up form</h1>
        <form className="form">
          <label htmlFor="fullName">Enter your first name</label>
          <input
            className="input"
            type="text"
            id="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="email" onChange={this.handleChange}>
            Enter your Email
          </label>
          <input
            className="input"
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="password">Enter password</label>
          <input
            className="input"
            type="text"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
