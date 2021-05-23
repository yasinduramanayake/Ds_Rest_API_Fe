import React,{Component} from 'react';
import axios from 'axios';
import {UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import NevBar from './Navbar';
import Payment from './PaymentMethod';

import OrderRow from './OrderRow';

class OrderView extends Component{

    constructor(props){
        super(props);

        this.state={
            order:[]
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);
    } 
    componentDidMount(){
        axios.get('http://localhost:8081/allOrders')
            .then(
                order=>{
                    this.setState({order:order.data})
                } 
               
            )
    }

    componentWillUpdate(){
        axios.get('http://localhost:8081/allOrders')
            .then(
                order=>{
                    this.setState({order:order.data})
                } 
            )
    }

    fillTable(){

        return this.state.order.map(order=>{
            return <OrderRow key={order._id} order={order}/>
        })
    }
    checkout(){
       console.log('full amount is' + this.state.order.price + this.state.order.qty)    
        }
    
    checkData(){
        if(this.state.order.length>0){

            return(
                <div>
                    <NevBar/>
                <div className='container' style={{marginTop:'20px'}}>
                    <h2 className="margin-bottom-10 text-center">My Order Details</h2>
                    <br/>
                    <div className="admin-content-widget no-padding">
                        <div className="panel panel-default table-responsive">
                        <table className="table table-striped table-bordered tadmin-user-table">
                            <thead className='text-center'>
                            <tr>
                                <td><a href="" className="admin-sort-by">Product Name<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Price<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Quantity<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Recevier's Name<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Address<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Full Amount<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Edit</a></td> 
                                <td><a href="" className="admin-sort-by">Cancel</a></td> 
                            </tr>
                            </thead>
                         <tbody>
                            {this.fillTable()}
                        </tbody>
                    </table>  
                   
                    </div>  
                    <Payment/>                        
                </div> 
              </div>
              </div>
            )

        }
        else{
            return( 
                <div className='container' style={{marginTop:'100px'}}>
                    <UncontrolledAlert color="danger">
                        <h4 className="alert-heading">No Delivery Data Available</h4>
                    </UncontrolledAlert>
                    <br></br>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Link to='/delivery/add'><Button color="primary">check out</Button></Link>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.checkData()
    }


    }

export default OrderView;