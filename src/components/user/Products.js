import React, {Component} from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import NevBar from './Navbar';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/allproducts')
        .then(
            products=>{
                this.setState({products:products.data})
            }

        )
    }

    componentDidUpdate() {
        axios.get('http://localhost:8081/allproducts')
        .then(
            products=>{
                this.setState({products:products.data})
            }
        )
    }

    render() {
        return (
            <div>
            <NevBar/>
            <section class="product_feature_main mt-3">
                <div class="container">
                    <div class="single_b_title">
                        <h2>Our Products</h2>
                    </div>
                    <div class="product_feature_row row">
                    {
                        this.state.products.map((product) => {
                                return (
                                    <div class="col-lg-3 col-md-4 col-6">
                                        <div class="product_feature_item">
                                            <div class="product_img">
                                                <img src={window.location.origin + '/images/' + product.img} alt=""/>
                                            </div>
                                            <div class="product_text">
                                                <h3>{product.name}</h3>
                                                <h4>Rs {product.price}.00</h4>
                                                <p>{product.description}</p>
                                                <p>Ventor: {product.ventor}</p>
                                                <Link to={'/order/'+product.id}>Order</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                        })
                    }
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Products;