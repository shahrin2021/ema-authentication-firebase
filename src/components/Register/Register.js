import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
           <div>
           <h3>Register : Create Account</h3>
           <form onSubmit="">
           <label htmlFor="">Email : </label>
                <div> 
                <input type="email" name="" id="" />
                </div>
                <label htmlFor="">Password : </label>
                <div>
                <input type="password" name="" id="" />
                </div>
                <label htmlFor="">Re-enter Password : </label>
                <div>
                <input type="password" name="" id="" />
                </div>
                <div>
                <input type="submit" name="" id=""  value="Register"/>
                </div>
           </form>
           <p>Already hava an Account <Link to='/login'>Sign in</Link></p>
           <div>-----------------or-----------------</div>
           <button className="btn-regular">sign in with google</button>

           </div>
        </div>
    );
};

export default Register;