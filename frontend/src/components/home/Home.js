import React, { Component } from "react";
import actions from "../../services/index";
import Product from "../Product";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <Product {...this.props} />
      </div>
    );
  }
}
export default Home;
