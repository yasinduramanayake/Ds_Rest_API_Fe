import React,{Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom';

class EditProducts extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            name:'',
            price:'',
            ventor:'',
            img:'',
            description:''

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
                        name:product.data.name,
                        price:product.data.price,
                        ventor:product.data.ventor,
                        img:product.data.img,
                        description:product.data.description
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
        });
    }

    onFormSubmit(e){
        e.preventDefault();

        var path = this.state.img;
        var filename = path.replace(/^.*\\/, "");

        const name = this.state.name;
        const price = this.state.price;
        const ventor = this.state.ventor;
        const img = filename;
        const description = this.state.description;

        const product={
            name,
            price,
            ventor,
            img,
            description
        }

        axios.post('http://localhost:8080/updateProduct/'+this.props.match.params.id,product)
            .then(
                res=>{
                    this.setState({
                        visible:true,
                        name:'',
                        price:'',
                        description:'',
                        ventor:'',
                        img:''});

                        Swal.fire(
                            'Done',
                            'Product Details Updated!',
                            'success'
                            )
                        this.props.history.push('/products/view');
                },
                err=>console.log(err)
            )
    }

    render(){
        return(
            <div className="container" style={{marginTop:'20px'}}>
                    <div style={{display:'flex',justifyContent:'left'}}>
                        <Link to='/products/view'><span><i className="fa fa-arrow-left"/></span></Link>
                    </div>
                <main role="main" style={{marginTop:'40px'}}>
                    <section className="jumbotron text-center" >
                        <div className="container">
                                <div className="col-md-12 text-center">
                                    <h4 className="pb-4">Edit Product Details</h4>
                                <form id='staffForm' onSubmit={this.onFormSubmit}>
                                    <div className="row form-group">
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Product Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={this.onValueChange}
                                                value={this.state.name}/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="price"
                                                onChange={this.onValueChange}
                                                value={this.state.price}/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Ventor</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="ventor"
                                                onChange={this.onValueChange}
                                                value={this.state.ventor}/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 form-group">
                                            <label>Product Image</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={this.onValueChange}
                                                value={this.state.img}
                                                readOnly/>
                                            {/* <div className="imaged-upload">
                                               <label><img class="image" src={window.location.origin + '/images/' + this.state.img} alt=""/> </label>
                                            </div>  */}
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-12 col-md-12 form-group">
                                            <label >Description</label>
                                            <textarea
                                                    className="form-control"
                                                    name="description"
                                                    rows="2"
                                                    onChange={this.onValueChange}
                                                    value={this.state.description}/>
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="admin-blue-button">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default EditProducts;