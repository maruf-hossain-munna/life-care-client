import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser, updateUser} = useContext(Authcontext);
    const navigate = useNavigate();

    const handleregister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUser(name, photoURL)
                navigate('/signin')
            })
            .catch(error => console.log(error));
    }

    const handleUpdateUser = (name, photoURL) =>{
        const profile = {
            displayName : name, 
            photoURL
        }
        updateUser(profile)
        .then( () =>{})
        .catch(err => console.error(err))
    }


    return (
        <div>
            <Helmet>
                <title>Life Care Sign up</title>
            </Helmet>
            
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        {/* <img className='w-3/4' src={loginImg} alt="" /> */}
                        <img className='w-full' src="https://st.depositphotos.com/1907633/3137/i/950/depositphotos_31373959-stock-photo-medicine-doctor-working-with-modern.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                        <form onSubmit={handleregister} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                            </div>
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
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p className='text-center mb-4'>Have any account? Please <Link className='text-orange-600 font-semibold' to='/signin'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;