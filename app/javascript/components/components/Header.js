import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {
      logged_in,
      sign_in_route,
      sign_out_route,
      new_user_route
    } = props
    

  return (
    <>
    <div className="header-main"></div>
      <Navbar color="light" light expand="md">
        <Container>
        <NavbarBrand href="/">Apartment App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/aptindex/">Browse All</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/aptshow/">Find</NavLink>
              </NavItem>
              { logged_in &&
                <NavItem>
                  <NavLink to="/aptnew/">Create an Apartment</NavLink>
                </NavItem>
              }
              { logged_in &&
                <NavItem>
                  <NavLink to="/userindex/">Browse All My Apartments</NavLink>
                </NavItem>
            }
          </Nav>
            <Nav>
                { logged_in &&
                    <NavItem>
                        <a href={ sign_out_route } className="nav-link">Sign Out</a>
                    </NavItem>
                }
                { !logged_in &&
                    <NavItem>
                        <a href={ new_user_route } className="nav-link">Create Account</a>
                    </NavItem>
                }
                { !logged_in &&
                    <NavItem>
                        <a href={ sign_in_route } className="nav-link">Sign In</a>
                    </NavItem>
                }
            </Nav>
        </Collapse>
      </Container>
    </Navbar>

  </>
  );
  }
 
export default Header;