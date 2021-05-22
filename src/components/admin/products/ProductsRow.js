import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'

const productImage = "../../../assets/img/DduFuPVV4AEcfiu.jpg";

class ProductsRow extends Component{

    constructor(props){
        super(props);

        this.state={
            product:props.product
        }

        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        axios.get('http://localhost:8080/deleteproducts/'+this.state.product.id)
            .then(

                res => {
                    Swal.fire(
                        'Done',
                        'Product Removed !',
                        'success'
                        )
                }
            )
    }

    render(){
        return(
            <tr className='text-center'>
                  	<td>{this.state.product.name}</td>
                    <td>{this.state.product.price}</td>
                    <td>{this.state.product.ventor}</td>
                    <td><img class="image" src={window.location.origin + '/images/' + this.state.product.img} alt=""/></td>
                    <td>{this.state.product.description}</td>

        	</tr>
        )
    }

}

export default ProductsRow;