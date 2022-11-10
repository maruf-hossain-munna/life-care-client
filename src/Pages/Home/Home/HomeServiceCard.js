import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeServiceCard = ({ service }) => {
    const { _id, title, price, description, img } = service;
    return (
        <div>

            <div className="card h-full card-compact w-96 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='h-80 w-full object-cover'  src={img} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title font-bold"> {title} </h2>
                    <p> {description.slice(0, 100)}... </p>
                    <h2 className="text-xl font-semibold text-orange-600"> Price: {price}$ </h2>
                    
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline btn-primary w-full mt-6">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;