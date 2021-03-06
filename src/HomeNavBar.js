import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse} from "mdbreact";
// import {Link} from "react-router-dom"


class HomeNavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse =()=> this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar style={{backgroundColor: "#6740B5" }} dark expand="md">
          <NavbarBrand>
            <NavLink to="/"><strong className="white-text">Wanderlust</strong></NavLink>

          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <NavbarNav left>
              <NavItem>
                <NavLink to="/home">Blog Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/explore">Explore</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/form">Create a Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>

            </NavbarNav>






          </Collapse>
      </Navbar>
    );
  }
}

export default HomeNavBar;
