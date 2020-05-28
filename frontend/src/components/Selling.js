import React, { Component } from "react";

class Selling extends Component {
  render() {
    return (
      <div className="cent-ered">
        <div className="name-item">
          <h3>Name of item: </h3>
          <input type="text" placeholder="Insert label here" />
        </div>
        <div className="picture-of-item">
          <h3>Upload a picture: </h3>
          <img className="small-picture" src="images/noimage.jpg" />
        </div>
        <div className="insert-desc">
          <p>Add a description to your Item: </p>
          <input type="text" placeholder="Insert Description here" />
        </div>
        <div className="insert-price">
          <p>Price (in USD) of your item: </p>
          <input type="Number" placeholder="Insert price here" />
        </div>
      </div>
    );
  }
}

export default Selling;
