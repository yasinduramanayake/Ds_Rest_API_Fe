import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import NevBar from './nevbar';

class Update extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            full_name:'',
            mobile: '',
            date_of_birth:'',
            email: '',
            password: '',

        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }
 componentDidMount(){
        axios.get('http://localhost:8081/getusers/' + localStorage.token)
            .then(
                res=>{
                    this.setState({
                        full_name: res.data.full_name,
                        mobile: res.data.mobile,
                        date_of_birth: res.data.date_of_birth,
                        password: res.data.password,
                        email:res.data.email
                    })
                }

            )
    }
    onDismiss() {
        this.setState({ visible: false });
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFormSubmit(e){
        e.preventDefault();

        const full_name = this.state.full_name;
        const mobile = this.state.mobile;
        const date_of_birth = this.state.date_of_birth;
        const email = this.state.email;
        const password = this.state.password;


        const users={
            full_name,
            mobile,
            date_of_birth,
            email,
            password
        }

        axios.post('http://localhost:8081/updateuser/'+  localStorage.token , users)
            .then(
                (res)=>{
                    this.setState({
                        visible:true,
                        full_name:'',
                        mobile: '',
                        date_of_birth: '',
                        email: '',
                        password:''

                    });

                    Swal.fire(
                        'Done',
                        'Profile Updated',
                        'success'
                        )

                    this.props.history.push('/profile');

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
    render(){
        return(
            <center>
                 < NevBar></NevBar>
<br></br>
            <Card style={{width:'600px'}}>

                <Card.Header as="h5">Edit Your Profile</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.onFormSubmit}>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder=" email" name="email"
                                onChange={this.onValueChange}
                                value={this.state.email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                    </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">


                            <Form.Control aria-describedby="passwordHelpBlock" required type="hidden" placeholder="Password" name="password"
                                onChange={this.onValueChange}
                                    value={this.state.password} />

                        </Form.Group>
                        <Form.Group controlId="formBasicFullnamed">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" required placeholder="Full Name" name="full_name" onChange={this.onValueChange} value={this.state.full_name} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Mobile</Form.Label>

                       <Form.Control type="number" required placeholder="Mobile" name="mobile" onChange={this.onValueChange} value={this.state.mobile} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

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
                            Update
                                </Button>
                    </Form>
                </Card.Body>
                </Card>
                </center>
        );
    }
}

export default  Update ;