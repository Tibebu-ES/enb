import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#home">E-Noticing App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
              <Form inline>
                <Button variant="outline-success">Login</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
