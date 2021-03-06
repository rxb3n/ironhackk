import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Link } from "react-router-dom";
import actions from "../../services";
function refreshPage() {
  window.location.reload(false);
}

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <img className="white-text logo" src="images/logo.png" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">
                <i className="fa fa-home" aria-hidden="true"></i> Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/cart">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i> Cart
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/selling">
                <i className="fa fa-money" aria-hidden="true"></i> Sell Item
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                    User
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {!this.props.isLoggedIn ? (
                    <>
                      <MDBDropdownItem>
                        <Link to="/log-in">
                          <i className="fa fa-plug" aria-hidden="true"></i> Log
                          In
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/sign-up">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                          Register
                        </Link>
                      </MDBDropdownItem>
                    </>
                  ) : (
                    <MDBDropdownItem onClick={actions.logOut}>
                      <i className="fa fa-user-times" aria-hidden="true"></i>{" "}
                      Log Out
                    </MDBDropdownItem>
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
