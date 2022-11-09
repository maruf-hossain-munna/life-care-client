import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(Authcontext);
    const [reviews, setreviews] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/myReviews?email=${user.email}`)
        .then(res => res.json())
        .then( data => setreviews(data))
    } ,[user?.email])


    const handleDeleteReview = (_id) =>{
        // console.log(_id);
        const proceed = window.confirm('Are you sure to delete your review?');
        if(proceed){
            fetch(`http://localhost:5000/myReviews/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successful');
                    const remaining = reviews.filter( rvw => rvw._id !== _id);
                    setreviews(remaining);
                }
            })
        }
    };

    return (
        <div className='container mx-auto'>
            <h2 className="text-3xl font-bold text-center mb-6">
                You have {reviews.length} reviews
            </h2>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    ></MyReviewCard> )
                }
            </div>
        </div>
    );
};

export default MyReviews;