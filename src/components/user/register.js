import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class Register extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            full_name:'',
            gender: '',
            date_of_birth:'',
            email: '',
            password:''
        };


        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);

    }

    onDismiss() {
        this.setState({ visible: false });
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    onFormSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        e.preventDefault();

        const full_name = this.state.full_name;
        const gender = this.state.gender;
        const date_of_birth = this.state.date_of_birth;
        const email = this.state.email;
        const password = this.state.password;


        const users={
            full_name,
            gender,
            date_of_birth,
            email,
            password
        }

        axios.post('http://localhost:8081/addusers',users)
            .then(
                (res)=>{
                    this.setState({
                        visible:true,
                        full_name:'',
                        gender: '',
                        date_of_birth: '',
                        email: '',
                        password:''

                    });

                    Swal.fire(
                        'Done',
                        'New User Added!',
                        'success'
                        )

                    this.props.history.push('/login');

                },
                (err)=>{
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                      })
                }

            )

    }
    render() {

        return (


            <Card>

                <Card.Header as="h5">Register Here!</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.onFormSubmit}>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" name="email"
                                onChange={this.onValueChange}
                                value={this.state.email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                    </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control aria-describedby="passwordHelpBlock" required type="password" placeholder="Password" name="password"
                                onChange={this.onValueChange}
                                value={this.state.password} />
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                             </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                        </Form.Group>
                        <Form.Group controlId="formBasicFullnamed">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" required placeholder="Full Name" name="full_name" onChange={this.onValueChange} value={this.state.full_name} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select" name="gender" required onChange={this.onValueChange} value={this.state.gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Control>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicDOB">
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control required type="date" placeholder="Enter Date Of Birth" name="date_of_birth"
                                onChange={this.onValueChange}
                                value={this.state.date_of_birth} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                                </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default  Register ;