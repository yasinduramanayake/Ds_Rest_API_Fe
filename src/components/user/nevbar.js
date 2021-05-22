import React, {Component} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {  NavDropdown } from 'react-bootstrap';



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
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Welcome</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                        <Button onClick={this.logout}  variant="outline-success">Logout</Button>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default  Nevbar ;