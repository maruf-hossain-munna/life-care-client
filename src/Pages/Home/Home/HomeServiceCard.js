import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({ service }) => {
    const { _id, title, price, description, img} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold"> {title} </h2>
                    <p> {description.slice(0, 100)} </p>
                    <Link to={`/services/${_id}`}>
                    <button className="btn btn-outline btn-primary w-full mt-6">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;