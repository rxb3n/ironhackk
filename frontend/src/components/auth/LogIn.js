import React, { Component, Fragment } from "react";
import actions from "../../services/index";

class LogIn extends Component {
  state = {};
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then((user) => {
        console.log(user);
        this.props.setUser({ ...user.data });
      })
      .catch(({ response }) => console.error(response.data));
  };
  render() {
    return (
      <Fragment>
        <h2>Log-In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Write your e-mail here"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Write password here"
            onChange={this.handleChange}
          />
          <input type="submit" value="Log In" />
        </form>
      </Fragment>
    );
  }
}

export default LogIn;
