import React, {Component} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import NevBar from './nevbar';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {  NavDropdown } from 'react-bootstrap';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []
        }
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/post/all')
            .then(response => {
                this.setState({
                    post: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/post/all')
            .then(response => {
                this.setState({
                    post: response.data.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
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
<NevBar></NevBar>
        );
    }
}
export default  Home;