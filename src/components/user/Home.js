import React, {Component} from 'react'
import axios from "axios";
import NevBar from './Navbar';
import Slider from './Slider';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            products:[]
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

    logout() {
        localStorage.clear();
        window.location.href = "/login"
    }

    render() {
        return (
            <div>
                <NevBar/>
                <Slider/>
                <div>
                    <section class="product_feature_main mt-5">
                        <div class="container">
                            <div class="single_b_title">
                                <h2>Our Featured Products</h2>
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
            </div>
        );
    }
}
export default  Home;