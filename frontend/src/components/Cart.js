import React, { Component } from "react";
class Cart extends Component {
  render() {
    let items =
      this.props.user?.cart?.items.map((id) =>
        this.props.items.find((item) => (item._id = id))
      ) || [];
    let price = 0;
    console.log(this.props);
    return (
      <div className="complete-cart">
        <div className="the-cart">
          <h3>Items in Cart: </h3>
        </div>
        {items.map((item) => {
          price += item.price * item.quantity;
          return (
            <div key={item._id}>
              <h4>
                {item.name} * {item.quantity}
              </h4>
              <h5>$ {item.price}</h5>
            </div>
          );
        })}
        <div className="total-price">
          <h3>Total Price in USD: $ {price.toFixed(2)}</h3>
        </div>
      </div>
    );
  }
}

export default Cart;
