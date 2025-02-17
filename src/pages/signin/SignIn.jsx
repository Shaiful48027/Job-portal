import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import GoogleAuth from './GoogleAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location.state || "/";
    


    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result =>{
            console.log('signin', result.user)
            navigate(from)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white btn-primary">Sign-in</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleAuth></GoogleAuth>
                </div>
            </div>
        </div>
    );
};

export default SignIn;