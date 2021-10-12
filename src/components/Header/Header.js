import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const{ handleSignOut ,user}= useAuth() 
    console.log(handleSignOut.handleSignOut)
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                <NavLink to="/login">Login</NavLink>
                <h2 style={{color:'red'}}>{user.displayName}</h2>
                { user.email && <button onClick={handleSignOut} className='btn-regular'>signOut</button> }
                     
            </nav>
        </div>
    );
};

export default Header;