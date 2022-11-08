import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../../Reviews/Reviews';

const Details = () => {
    const service = useLoaderData();
    const { img, description, title, _id, price } = service;
    console.log(service);
    return (
        <div className='container mx-auto mt-4'>
            <div className="card lg:w-1/2 w-full bg-base-100 shadow-xl mx-auto">

                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>

                
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

            <div>
                <Reviews
                    service={service}
                ></Reviews>
            </div>
        </div>
    );
};

export default Details;