import React from 'react';
import { Link } from 'react-router-dom';

const BottomBanner = () => {
    return (
        <div className='rounded-lg my-10'>
            <div className="hero min-h-screen rounded-lg " style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj-yv9PeyDjIuuRXNLxwV520MhOdJAhLVxUn7NkUnpEuozAd59fJeWsNNAc2btZcEz28&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello There!!!</h1>
                        <p className="mb-5">This is Dr. Maruf Hossain Munna. MBBS(dhaka), BCS(health) DICM(dhaka).
                            This is my personal service center. I will give you this service. If you need any service, please Booking your service and always with us. Thanks</p>


                        <Link to='/services'>
                            <button className="btn btn-primary">Get Started </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;