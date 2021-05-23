import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';
import NevBar from './Navbar';
class Order extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            pname:'',
            price:'',
            email:'',
            qty:'',
            rname:'',
            address:''
        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8081/getProduct/'+this.props.match.params.id)
            .then(
                product =>{
                    this.setState({
                        pname:product.data.name,
                        price:product.data.price
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

        const pname = this.state.pname;
        const price = this.state.price; 
        const email = this.state.email;
        const qty = this.state.qty;
        const rname =  this.state.rname;
        const address = this.state.address;

        const order={
            pname,
            price,
            email,
            qty,
            rname,
            address
        }

        axios.post('http://localhost:8081/addOrders',order)
            .then(
                (res)=>{
                    this.setState({
                        visible:true,
                        pname:'',
                        price:'',
                        email:'',
                        qty:'',
                        rname:'',
                        address:''
                    });

                    Swal.fire(
                        'Done',
                        'Product Ordered Sucessfully!',
                        'success'
                        )

                    this.props.history.push('/orders/view');

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
            <div>
            <NevBar/>
            <div className="container" style={{marginTop:'20px'}}>
                <main role="main">
                    <section className="jumbotron text-center" >
                        <div className="container">
                                <div className="col-md-12 text-center">
                                    <h4 className="pb-4">Order Product</h4>
                                <form id='staffForm' onSubmit={this.onFormSubmit}>
                                    <div className="row form-group">
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Product Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="pname"
                                                onChange={this.onValueChange}
                                                value={this.state.pname}
                                                />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="price"
                                                onChange={this.onValueChange}
                                                value={this.state.price}
                                                />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                              
                                                value={localStorage.token}
                                                />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Quantity</label>
                                            <select id="qty" name="qty" onChange={this.onValueChange} class="form-control">
                                                <option value="qty" selected>Select Quantity</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>  
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Recevier Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="rname"
                                                onChange={this.onValueChange}
                                                value={this.state.rname}
                                                />
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label >Delivery Address</label>
                                            <textarea
                                                    className="form-control"
                                                    name="address"
                                                    rows="1"
                                                    placeholder="Delivery Address"
                                                    onChange={this.onValueChange}
                                                    value={this.state.description}
                                                    />
                                        </div>
                                    </div>
                                   
                                    <div className="form-group text-center">
                                        <button type="submit" className="admin-blue-button">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
         </div>
        );
    }
}

export default Order;