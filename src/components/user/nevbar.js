import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {  NavDropdown } from 'react-bootstrap';
import { LogOut } from 'react-bootstrap-icons';




class Nevbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }
        this.onDelete = this.onDelete.bind(this);
    }
     logout() {
        localStorage.clear();
        window.location.href = "/login"
    }
    onDelete() {
        axios.get('http://localhost:4000/editor/conference/delete/' + this.state.conference._id)
            .then(
                res => {
                    Swal.fire(
                        'Done',
                        'Conference Removed !',
                        'success'
                    )
                }
            )
    }
    render() {
        return (
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                          <Nav.Link href="/products">Product</Nav.Link>

                            </Nav>
                            <NavDropdown  bg="dark" title="settings" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/profile">User Profile</NavDropdown.Item>
                                                    <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>

                                                </NavDropdown>
                        </Navbar.Collapse>
                        </Navbar>





        );
    }
}
export default  Nevbar ;