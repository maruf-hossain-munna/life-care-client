import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const reviews = useLoaderData();
    console.log(reviews);
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;