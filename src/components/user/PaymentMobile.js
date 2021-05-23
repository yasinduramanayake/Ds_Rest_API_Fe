import React,{Component} from 'react';
import Swal from 'sweetalert2'
import Timer from 'react-compound-timer'
import NevBar from './Navbar';

class PaymentMobile extends Component{
    constructor(props) {
        super(props);
        
        this.paymentSucess =  this.paymentSucess.bind(this);
    }

    paymentSucess(){
        Swal.fire(
            'Done',
            'Mobile Payment Sucessfully Recieved!',
            'success'
            )
        this.props.history.push('/home');
    }

    render(){
        return(
            <div>
                <NevBar/>
                <div className='container' style={{marginTop:'100px'}}>
                    <main role="main">
                        <section className="jumbotron text-center" >
                            <div className="container">
                                    <div className="col-md-12 text-center">
                                        <h3 className="pb-4">Mobile Payment</h3>
                                        <p className='text-primary'> Please check your mobile the 6 digit OTP number has been send</p>
                                    <div id='productForm' style={{display:'flex',justifyContent:'center'}}>
                                            <div className="col-lg-6 col-md-6 form-group">                  
                                                <input
                                                    type="text" 
                                                    className="form-control" 
                                                    name="mobile"  
                                                    placeholder="Enter the OTP Number"/>                  
                                            </div>    
                                        <div className="form-group text-center">
                                            <button type="submit" onClick={this.paymentSucess} className="admin-blue-button">Verify</button>
                                        </div> 
                                    </div>   
                                    <div className='text-danger'>
                                        <Timer initialTime={59000} direction="backward">
                                            {() => (
                                                <React.Fragment>
                                                    <Timer.Seconds /> Seconds Left
                                                </React.Fragment>
                                            )}
                                        </Timer>     
                                    </div>                   
                                </div>
                            </div>  
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default PaymentMobile;