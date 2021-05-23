import React,{Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';


class PaymentMethod extends Component{

    render(){
        return(
            <div className='container' style={{marginTop:'100px'}}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to='/payment/mobile'><Button color="warning" style={{marginRight:'20px'}}>Mobile Payment</Button></Link>
                    <Link to='/payment/card'><Button color="primary">Card Payment</Button></Link>
                </div>
            </div>
        )
    }
}

export default PaymentMethod;