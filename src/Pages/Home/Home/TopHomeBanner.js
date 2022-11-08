import React from 'react';
import { Link } from 'react-router-dom';

const TopHomeBanner = () => {
    return (
        <div>
            <div className="hero py-10 shadow-2xl mb-10 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 w-full'>
                        <img src="https://github.com/maruf21hossain/life-care-image/blob/main/doctor2.jpg?raw=true" alt=''
                            className=" rounded-lg " />
                    </div>
                    <div className='lg:w-1/2 w-full px-4'>
                        <h1 className="text-4xl font-bold">Dr. MARUF HOSSAIN MUNNA</h1>
                        <p>MBBS(dhaka), BCS(health) <br /> DICM(dhaka)</p>
                        <p className="py-6">This is Dr. Maruf Hossain Munna. MBBS(dhaka), BCS(health) DICM(dhaka). <br />
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

export default TopHomeBanner;