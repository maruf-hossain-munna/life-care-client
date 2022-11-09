import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signin = () => {
    const { login, providerLogin } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignin = (provider) => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = (provider) => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true} || '/');
                // navigate('/')
                form.reset();
            })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <Helmet>
                <title>Life Care Sign in</title>
            </Helmet>

            <div className="hero w-full my-20">
                <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        {/* <img className='w-3/4' src={loginImg} alt="" /> */}
                        <img className='w-full' src="https://st.depositphotos.com/1907633/3137/i/950/depositphotos_31373959-stock-photo-medicine-doctor-working-with-modern.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Sign in</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign In" />

                            </div>
                            <p className='text-center mb-4'>New user? Please <Link className='text-orange-600 font-semibold' to='/signup'>Sign Up</Link></p>
                            <button
                                onClick={handleGoogleSignin}
                                className="btn btn-outline btn-primary  w-full"
                            >Sign In with Google</button>

                            <button onClick={handleGithubSignIn} className="btn btn-outline">Github</button>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;