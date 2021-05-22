import React,{Component} from 'react';
import axios from 'axios';
import {UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import ProductsRow from '../admin/products/ProductsRow';

class ViewProducts extends Component{

    constructor(props){
        super(props);

        this.state={
            products:[]
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8081/allproducts')
            .then(
                products=>{
                    this.setState({
                        products: products.data
                    })
                }

            )
    }

    componentWillUpdate(){
        axios.get('http://localhost:8081/allproducts')
            .then(
                products=>{
                    this.setState({products:products.data})
                }
            )
    }

    fillTable(){

        return this.state.products.map(product=>{
            return <ProductsRow key={product._id} product={product}/>
        })
    }


    checkData(){
        if(this.state.products.length>0){

            return(
                <div className='container' style={{marginTop:'20px'}}>
                    <div style={{display:'flex',justifyContent:'left'}}>
                        <Link to='/admin/home'><span><i className="fa fa-arrow-left"/></span></Link>
                    </div>
                    <h2 className="margin-bottom-10 text-center">View Products</h2>
                    <br/>
                    <div className="admin-content-widget no-padding">
                        <div className="panel panel-default table-responsive">
                        <table className="table table-striped table-bordered tadmin-user-table">
                            <thead className='text-center'>
                            <tr>
                                <td><a href="" className="admin-sort-by">Product Name<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Price<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Ventor <span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Image<span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Description <span className="caret"></span></a></td>
                                <td><a href="" className="admin-sort-by">Add to cart</a></td>

                            </tr>
                            </thead>
                         <tbody>
                            {this.fillTable()}
                        </tbody>
                    </table>
                    </div>
                </div>
              </div>
            )

        }
        else{
            return(
                <div className='container' style={{marginTop:'100px'}}>
                    <UncontrolledAlert color="danger">
                        <h4 className="alert-heading">No Product Data Available</h4>
                    </UncontrolledAlert>
                    <br></br>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Link to='/products/add'><Button color="primary">Add Products</Button></Link>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.checkData()
    }


}

export default ViewProducts;