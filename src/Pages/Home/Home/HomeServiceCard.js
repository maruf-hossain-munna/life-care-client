import React from 'react';

const HomeServiceCard = ({ service }) => {
    const {title, price, description, img} = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold"> {title} </h2>
                    <p> {description.slice(0, 100)} </p>
                    <button className="btn btn-outline btn-primary mt-6">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;