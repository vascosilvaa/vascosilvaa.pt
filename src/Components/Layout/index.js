import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import '../../Shared/index.css'
import { StyledHeader, StyledHeaderTitle, StyledHeaderSubtitle } from './layoutComponents';
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import './index.css'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="layout">
        <StyledHeader>
          <Navbar expand="md">
            <Container>
              <NavbarBrand><Link to="/">vascosilvaa.pt</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link to="/">Blog</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link to="/about">Sobre mim</Link></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <StyledHeaderTitle className="container">
            {this.props.title}
            <StyledHeaderSubtitle>{this.props.subtitle}</StyledHeaderSubtitle>
          </StyledHeaderTitle>

        </StyledHeader>
        <div className="pt-5 pb-5">
          {this.props.children}
        </div>
        <Footer />
      </div>

    )
  }
}

export default Layout;