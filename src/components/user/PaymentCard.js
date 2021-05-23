import React,{Component} from 'react';
import Swal from 'sweetalert2'
import NevBar from './Navbar';

class PaymentCard extends Component{
    constructor(props) {
        super(props);

        this.paymentSucess =  this.paymentSucess.bind(this);
    }

    paymentSucess(){
        Swal.fire(
            'Done',
            'Card Payment Sucessfully Recieved!',
            'success'
            )
        this.props.history.push('/home');
    }

    render(){
        return(
            <div>
                <NevBar/>
                <div className='container mt-4'>
                    <main role="main">
                        <section className="jumbotron" >
                            <h3 className="pb-2 text-center">Card Payment</h3>
                                <div className="col-md-8 mx-auto mr-2">
                                    <div className="card">
                                        <div class="row mt-3 ml-1 mr-1">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label className='text-left' >CARD NUMBER</label>
                                                    <div class="input-group">
                                                        <input type="tel" class="form-control" placeholder="Enter Card Number" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 ml-1 mr-1">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>CARD OWNER</label>
                                                    <input type="text" class="form-control" placeholder="Enter Card Owner Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-1 ml-1 mr-1">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>EXPIRATION DATE</label>
                                                    <input type="tel" class="form-control" placeholder="MM / YY" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>CV CODE</label>
                                                    <input type="tel" class="form-control" placeholder="CVC" />
                                                </div>
                                            </div>
                                        </div>
                                        <img className='card-icon mb-2' src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"></img>
                                    </div>
                                    <div className="col text-center mt-3">
                                        <button type="submit" onClick={this.paymentSucess} className="admin-blue-button">Pay Amount</button>
                                    </div>
                                </div>          
                            </section>
                        </main>
                    </div>
                 </div>    
        )
    }
}

export default PaymentCard;