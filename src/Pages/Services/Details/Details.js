import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../../Reviews/Reviews';
import MyReviewCard from '../../MyReviews/MyReviewCard';
import { Authcontext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import ReviewCard from './ReviewCard';



const Details = () => {
    const { user } = useContext(Authcontext);
    const service = useLoaderData();
    const { img, description, title, _id, price } = service;
    // console.log(service);
    const navigate = useNavigate();
    const [loadingAgain, setLoadingAgain] = useState(0);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id, loadingAgain]);
    console.log(reviews);

    const handleBooked = () =>{
        alert('Booked Successful')
    }

    return (
        <div className='container mx-auto mt-4'>
            <Helmet>
                <title>Life Care Service Details</title>
            </Helmet>
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
                        <button onClick={handleBooked} className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mt-12'>
                
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}

                    ></ReviewCard>)
                }
            </div>

            

            <div>
                <Reviews
                    service={service}
                    setLoadingAgain={setLoadingAgain}
                    loadingAgain={loadingAgain}
                ></Reviews>
            </div>
        </div>
    );
};

export default Details;