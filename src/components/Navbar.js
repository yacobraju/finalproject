import React from 'react';
import { Link } from 'react-router-dom' //importing Link 
 const Navbar = ()=>{
    return(<div className="raju">
            <nav className="nav-wrapper">
                <div className="container-fluid ">
                    <Link to="/" className="brand-logo text">SHOPPING</Link>
                    
                    <ul className="right" >
                    <li><Link to="/Home">Shop</Link></li>
                        <li><Link to="/home1">Home</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/registration'>Registration</Link></li>
                        <li><Link to="/cart"><i className="material-icons text-warning">shopping_cart</i></Link></li>
                        
                    </ul>
                </div>
            </nav>
            </div>
   
        
    )
}

export default Navbar;