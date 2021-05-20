import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { CardHeader, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Card, CardTitle, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            userdetails:{}


        };
    }
      componentDidMount(){
        axios.get('http://localhost:8081/getusers/' + localStorage.token)
            .then(
                res=>{
                    this.setState({
                        userdetails: res.data
                    })
                }

            )
    }
    deleteuser() {
        axios.get('http://localhost:8081/deleteuser/' + localStorage.token)
        alert("user Deleted")
           window.location.href="/"

}


    render(){
        return (
            <center>
                <br></br> <br></br> <br></br>
                <Card style={{ width: '80rem' }}>
                    <CardHeader></CardHeader>
                    <CardTitle style={{ backgroundColor:'blue' }} >
                        <h2>{this.state.userdetails.full_name}

                        </h2></CardTitle>
                <ListGroup variant="flush">
                    <ListGroupItem><h3>Date of birth </h3>
                                        <p>{this.state.userdetails.date_of_birth}</p></ListGroupItem>
                    <ListGroupItem> <h3>Full Name </h3>
                                        <p>{this.state.userdetails.full_name}</p></ListGroupItem>
                   <ListGroupItem>     <h3>E-mail</h3>
                            <p>{this.state.userdetails.email}</p></ListGroupItem>
                            <ListGroupItem>     <h3>Gender</h3>
                                        <p>{this.state.userdetails.gender}</p></ListGroupItem>
                </ListGroup>
                </Card>
                <Row >
<div style={{padding:"10px"}}>
                    <Button >Edit profile</Button>
                    </div>
<div style={{padding:"10px"}}>
                        <Button onClick={this.deleteuser}>Delete account</Button>
</div>
                    </Row>

                </center>





        );
    }
}

export default  Login ;