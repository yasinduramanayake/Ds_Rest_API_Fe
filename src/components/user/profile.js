import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import { CardHeader, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Card, CardTitle, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import NevBar from './Navbar';


class profile extends Component{

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
            <center >
                < NevBar></NevBar>
                <br></br>
                <Card style={{width:'480px'}}>
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
                            <ListGroupItem>     <h3>Mobile Number</h3>
                                        <p>{this.state.userdetails.mobile}</p></ListGroupItem>
                </ListGroup>

                <div className='row mx-auto'>
                 
                    <div style={{padding:"10px"}}>
                        <Button href="/editprofile">Edit profile</Button>
                    </div>
                    <div style={{padding:"10px"}}>
                        <Button onClick={this.deleteuser}>Delete account</Button>
                    </div>
                </div>                 
</Card>
                </center>





        );
    }
}

export default  profile ;