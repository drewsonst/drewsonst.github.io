import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { NavLink as RRNavLink, Link } from 'react-router-dom'

export default class CustomNavBar extends Component {
  state = {
    collapsed: true
  }


  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Navbar color="dark" dark light expand="md">
        <NavbarBrand tag={Link} to="/" className="mr-auto">Andrew S</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/" exact path="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/news">News</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
