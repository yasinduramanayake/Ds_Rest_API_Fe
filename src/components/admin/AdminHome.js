import React, {Component} from 'react'
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AdminHome extends Component {

    render() {
        return (
            <section className="card text-center" style={{marginTop:"50px"}}>
                <div class="container card-body light-gray-bg ">
                    <h4 className="card-title">Wellcome to Admin Home</h4>
                   
                        <div class="row">
                            <div class="col-lg-3 col-md-3 admin-icon">
                                <Link to={'/products/view'}><Button color="danger" style={{width:"140px",height:"140px"}}><span><i className="fa fa-eye"/></span> <br/>View Products</Button></Link>
                            </div>
                            <div class="col-lg-3 col-md-3 admin-icon">
                                <Link to={'/products/add'}><Button color="warning" style={{width:"140px",height:"140px"}}><span ><i className="fa fa-plus"/></span> <br/>Add Products</Button></Link>
                            </div>
                            <div class="col-lg-3 col-md-3 admin-icon">
                                <Link to={''}><Button color="success" style={{width:"140px",height:"140px"}}><span><i className="fa fa-calendar"/></span> <br/>Orders</Button></Link>
                            </div>
                            <div class="col-lg-3 col-md-3 admin-icon">
                                <Link to={''}><Button color="primary" style={{width:"140px",height:"140px"}}><span ><i className="fa fa-user"/></span> <br/>Customers</Button></Link>
                            </div>
                             
                        </div>    
                    </div>
            
            </section>
        );
    }
}