import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import actions from "./services/index";
import Home from "./components/home/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import Navbar from "./components/home/navbar";
import Cart from "./components/Cart";
import Selling from "./components/Selling";
class App extends Component {
  state = {
    items: [],
    user: {},
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    let items = await actions.getItems();
    console.log(user, items);
    this.setState({ user: user.data, items: items.data.items });
  }

  setUser = (user) => this.setState({ user });

  setItems = (item) =>
    this.setState((prevState) => ({ items: [...prevState.items, item] }));

  logOut = async () => {
    await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

  render() {
    return (
      <>
        <div className="welcoming">
          {"Welcome, "}
          {this.state.user.email}
        </div>
        <Navbar isLoggedIn={this.state.user._id ? true : false} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home items={this.state.items} {...props} />}
          />
          <Route
            exact
            path="/sign-up"
            render={(props) => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={(props) => <LogIn {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} user={this.state.user} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                user={this.state.user}
                items={this.state.items}
              />
            )}
          />
          <Route
            exact
            path="/selling"
            render={(props) => (
              <Selling
                setItems={this.setItems}
                {...props}
                user={this.state.user}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}
export default App;
