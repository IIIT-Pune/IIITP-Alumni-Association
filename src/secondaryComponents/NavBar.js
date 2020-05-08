import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav } from 'react-bootstrap';

export default function NavBar() {
      return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                              <NavDropdown style={{paddingLeft: 50}} title="Alumni Network" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/directory">Directory</NavDropdown.Item>
                                    <NavDropdown.Item href="/locate">Locate On Map</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link style={{paddingLeft: 50}} href="/featuredAlumni">Featured Alumni</Nav.Link>
                              <NavDropdown style={{paddingLeft: 50}} title="Alumni Services" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/findbatchmate">Find your Batchmate</NavDropdown.Item>
                                    <NavDropdown.Item href="/postjob">Post Job/Internship</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/alumnifund">Alumni Fund</NavDropdown.Item>
                              </NavDropdown>
                        </Nav>
                        <Nav>
                              <Nav.Link style={{paddingRight: 80}} href="/events">Events</Nav.Link>                              
                              <Nav.Link style={{paddingRight: 80}} href="/gallery">Gallery</Nav.Link>
                              <NavDropdown style={{paddingRight: 80}} title="More" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/news">News</NavDropdown.Item>
                                    <NavDropdown.Item href="/career">Career</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
                              </NavDropdown>
                        </Nav>
                  </Navbar.Collapse>
            </Navbar>
            </div>   
      );
}

