import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import {  Collapse, Form, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'reactstrap';


class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            email:'',
            password: '',
            loggedUser: null


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

    onFormSubmit(e){
        e.preventDefault();

        const password = this.state.password;
        const email = this.state.email;


        const users={
            email,
            password
        }
        axios.post('http://localhost:8081/login',users)
            .then(
                 (res)=>{
                    this.setState({
                        loggedUser: res.data.email
                    }, () => localStorage.setItem('token', this.state.loggedUser))
                    this.props.history.push('/home');
                    },



                (err) => {
                    alert('invalid creditionals')
                    this.props.history.push('/login');

                }

            )

    }
    render(){
        return (

            <center>

                <br></br> <br></br>
              <Card style={{width:'480px'}}>

                    <Card.Header as="h5">Login Here!</Card.Header>
                    <Card.Img variant="top" src="/images/user-login-or-access-authentication-icon-vector-6712526.jpg" />
  <Card.Body>
          <Form  onSubmit={this.onFormSubmit}>


                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required  type="email" placeholder="Enter email" name="email"
                                                    onChange={this.onValueChange}
                                                    value={this.state.email}/>
                                    <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                    </Form.Text>
                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control aria-describedby="passwordHelpBlock"  required  type="password" placeholder="Password" name="password"
                                                    onChange={this.onValueChange}
                                value={this.state.password} />
                            <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              </Form.Group>
                                <Button variant="primary" style={{height:'35px' , width:'400px'}} type="submit">
                                    Login
                                </Button>
                        </Form>


 <Nav  className="mr-auto">
                               <Col>
                                    <Nav.Link href="/register">Don't you have an account? register here</Nav.Link>
                              </Col>
                        </Nav>
                    </Card.Body>

                </Card>
                </center>
            // <div className="container" style={{marginTop:'20px'}}>
            //     <main role="main" style={{marginTop:'40px'}}>
            //         <section className="jumbotron text-center" >
            //             <div className="container">
            //                     <div className="col-md-12 text-center">
            //                     <h2 className="pb-4">Login here!</h2>
            //                     <center>
            //                         <form onSubmit={this.onFormSubmit}>
            //                             <div className="col-lg-6 col-md-6 form-group">
            //                                 <label>Email</label>
            //                                 <input
            //                                     type="text"
            //                                     className="form-control"
            //                                     name="email"
            //                                     placeholder="full_name"
            //                                     onChange={this.onValueChange}
            //                                     value={this.state.email}/>
            //                             </div>
            //                                <div className="col-lg-6 col-md-6 form-group">
            //                                 <label >Password</label>
            //                                 <input
            //                                         type="password"
            //                                         className="form-control"
            //                                         name="password"
            //                                         placeholder="password"
            //                                         onChange={this.onValueChange}
            //                                         value={this.state.password}/>
            //                             </div>
            //                              {/* <div className="col-lg-6 col-md-6 form-group">
            //                                 <label >Password</label>
            //                                 <input
            //                                         type="text"
            //                                         className="form-control"
            //                                         name="id"
            //                                         placeholder="id"
            //                                         onChange={this.onValueChange}
            //                                         value={this.state.id}/>
            //                             </div> */}
            //                         <div className="form-group text-center">
            //                             <button type="submit"className="admin-blue-button">Login</button>
            //                         </div>
            //                         </form>
            //                         </center>
            //                 </div>
            //                 </div>

            //         </section>
            //     </main>
            // </div>
        );
    }
}

export default  Login ;