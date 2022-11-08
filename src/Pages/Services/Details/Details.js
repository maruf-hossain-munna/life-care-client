import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    const { img, description, title, _id, price } = service;
    console.log(service);
    return (
        <div className='container mx-auto mt-4'>
            <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold"> {title} </h2>
                    <p>
                        {description}
                    </p>
                    <div className="card-actions justify-between mt-3">
                        <h2 className="text-2xl font-semibold text-orange-600"> Price: {price}$ </h2>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;