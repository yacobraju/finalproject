import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const Payment = () => {
    return ( <div>
        <h1 className="text-center text-success">PROCEED TO PAY</h1>
        <ul className="center" >
                    
                        <li><Link to="/home1">PAY THROUGH CREDIT CART</Link></li>
                        <li><Link to="/cart">PAY THROUGH DEBIT CART</Link></li>
                        <li><Link to='/login'>PAY THROUGH BHMI PIN</Link></li>
                        <li><Link to='/'>PAY THROUGH GOOGLE PAY</Link></li>
                        
                        
                    </ul>
    </div> );
}
 
export default Payment;