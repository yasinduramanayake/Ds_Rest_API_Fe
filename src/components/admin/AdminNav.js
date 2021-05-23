import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


class AdminNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }
    }
    logout() {
        localStorage.clear();
        window.location.href = "/"
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/admin/home">DS Shopping</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/admin/home">Home</Nav.Link>
                        <Nav.Link href="/products/view">Product</Nav.Link>

                    </Nav>
                    <NavDropdown bg="dark" title="settings" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>

                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
export default AdminNav;