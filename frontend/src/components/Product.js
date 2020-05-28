import React, { Component } from "react";
import { Link } from "react-router-dom";
import actions from "../services/index";

class Product extends Component {
  addItemToCart = async (item, quantity) => {
    let response = await actions.addItemToCart({ item, quantity });
    console.log(response);
  };

  displayItems = () => {
    return this.props.items.map((item) => (
      <div className="card" style={{ width: "18rem;" }}>
        <img src="images/iphonex.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <div className="price">{`$${item.price}`}</div>
          <button
            type="button"
            onClick={() => this.addItemToCart(item._id, 1)}
            to="#"
            className="btn btn-primary"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart
          </button>
        </div>
      </div>
    ));
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="mugthumbs">
          {this.displayItems()}
          {/* <div className="card" style={{ width: "18rem;" }}>
            <img src="images/iphonex.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple iPhone X</h5>
              <p className="card-text">Apple Phone</p>
              <div className="price">$999,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem;" }}>
            <img src="images/iphonex.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple iPhone X</h5>
              <p className="card-text">Apple Phone</p>
              <div className="price">$999,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem;" }}>
            <img
              src="/images/galaxyxx.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Samsung Galaxy S20</h5>
              <p className="card-text">Samsung Phone</p>
              <div className="price">$1099,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
              <p className="alertt">
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
                Only 1 left in stock!
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem;" }}>
            <img src="/images/lg5.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">LG Stylo 5</h5>
              <p className="card-text">LG Phone</p>
              <div className="price">$699,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
            </div>
          </div>
        </div>

        <div className="mugthumbs">
          <div className="card" style={{ width: "18rem;" }}>
            <img src="images/iphonex.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple iPhone X</h5>
              <p className="card-text">Apple Phone</p>
              <div className="price">$999,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem;" }}>
            <img
              src="/images/galaxyxx.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Samsung Galaxy S20</h5>
              <p className="card-text">Samsung Phone</p>
              <div className="price">$1099,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
              <p className="alertt">
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
                Only 1 left in stock!
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem;" }}>
            <img src="/images/lg5.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">LG Stylo 5</h5>
              <p className="card-text">LG Phone</p>
              <div className="price">$699,99</div>
              <a href="#" className="btn btn-primary">
                <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to
                cart
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Product;
