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
import { Link } from 'react-router-dom'

export default class HomeNavBar extends Component {
  state = {
    collapsed: true
  }


  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  closeNavbar = () => {
    this.setState({ collapsed: true })
  }

  render() {
    return (
      <Navbar color='dark' dark light expand='md' fixed='top'>
        <NavbarBrand tag={Link} to='/' className='mr-auto'>Andrew S</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem style={{ cursor: 'pointer' }} >
              <NavLink
                onClick={() => {
                  this.closeNavbar()
                  this.props.scrollTo(this.props.refs.top)
                }}>
                Top
              </NavLink>
            </NavItem>
            <NavItem style={{ cursor: 'pointer' }} >
              <NavLink
                onClick={() => {
                  this.closeNavbar()
                  this.props.scrollTo(this.props.refs.about)
                }}>
                About
              </NavLink>
            </NavItem>
            <NavItem style={{ cursor: 'pointer' }} >
              <NavLink
                onClick={() => {
                  this.closeNavbar()
                  this.props.scrollTo(this.props.refs.middle)
                }}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem style={{ cursor: 'pointer' }} >
              <NavLink
                onClick={() => {
                  this.closeNavbar()
                  this.props.scrollTo(this.props.refs.bottom)
                }}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
