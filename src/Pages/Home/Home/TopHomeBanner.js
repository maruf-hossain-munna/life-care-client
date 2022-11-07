import React from 'react';

const TopHomeBanner = () => {
    return (
        <div>
            <div className="hero py-10 shadow-2xl mb-10 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2'>
                        <img src="https://github.com/maruf21hossain/life-care-image/blob/main/doctor2.jpg?raw=true" alt=''
                            className=" rounded-lg " />
                    </div>
                    <div className='w-1/2 px-4'>
                        <h1 className="text-4xl font-bold">Dr. MARUF HOSSAIN MUNNA</h1>
                        <p>MBBS(dhaka), BCS(health) <br /> DICM(dhaka)</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHomeBanner;