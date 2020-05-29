import React, { Component } from "react";
import actions from "../services";

class Selling extends Component {
  state = {
    name: "",
    description: "",
    imgUrl: "",
    price: 0,
  };
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await actions.newItem(this.state);
    await this.props.setItems(response.data);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="cent-ered">
        <form method="POST" onSubmit={this.onSubmitHandler}>
          <div className="name-item">
            <h3>Name of item: </h3>
            <input
              type="text"
              placeholder="Insert name here"
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="picture-of-item">
            <h3>Upload a picture: </h3>
            {/* <img className="small-picture" src="images/noimage.jpg" /> */}
            <input
              type="text"
              placeholder="Insert URL here"
              name="imgUrl"
              value={this.state.imgUrl}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="insert-desc">
            <p>Add a description to your Item: </p>
            <input
              type="text"
              placeholder="Insert Description here"
              name="description"
              value={this.state.description}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="insert-price">
            <p>Price (in USD) of your item: </p>
            <input
              type="Number"
              placeholder="Insert price here"
              name="price"
              value={this.state.price}
              onChange={this.onChangeHandler}
            />
            <input type="submit" value="Post item" />
          </div>
        </form>
      </div>
    );
  }
}

export default Selling;
