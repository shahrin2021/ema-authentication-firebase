import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


import './Login.css'

const Login = () => {
    
    const {signInWithGoogle, user}=useAuth();
    const history = useHistory()

    const location = useLocation()
    const redirect_uri =location.state?.from || '/shop'
    const handleGoogleLogin =() =>{
        signInWithGoogle()
        .then(result=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className='login-form'>
            <div>
            <h3>please Login</h3>
            <form onSubmit="">
            <label htmlFor="">Email : </label>
                <div> 
                <input type="email" name="" id="" />
                </div>
                <label htmlFor="">Password : </label>
                <div>
                <input type="password" name="" id="" />
                </div>
                <div>
                <input type="submit" name="" id=""  value="submit"/>
                </div>
            </form>
            <p>new to ema-john <Link to="/register">Create an Account</Link></p>
            <div>----------or----------</div>
            <button className="btn-regular" onClick={handleGoogleLogin} >sign in with google</button>
            </div>
        </div>
    );
};

export default Login;