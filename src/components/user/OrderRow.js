import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

class OrderRow extends Component{

    constructor(props){
        super(props);

        this.state={
            order:props.order
        }

        this.onDelete=this.onDelete.bind(this);
    }
    
    onDelete(){
        axios.get('http://localhost:8081/deleteOrders/'+this.state.order.id)
            .then(
                
                res => {
                    Swal.fire(
                        'Done',
                        'Order canceled!',
                        'success'
                        )
                }
            )
    }

    render(){
        return(
            <tr className='text-center'>
                  	<td>{this.state.order.pname}</td>
                    <td>{this.state.order.price}</td>
                    <td>{this.state.order.qty}</td>
                    <td>{this.state.order.rname}</td>
                    <td>{this.state.order.address}</td>
                    <td>{this.state.order.price* this.state.order.qty}</td>
                    <td><Link to={'/orders/edit/'+this.state.order.id}><Button color="info">Edit</Button></Link></td>   
                    <td><Button color='danger' onClick={this.onDelete}>Cancel</Button></td>       
        	</tr>
        )
    }
    
}

export default OrderRow;