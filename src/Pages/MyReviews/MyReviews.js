import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user, logOut } = useContext(Authcontext);
    const [reviews, setreviews] = useState([]);
    const [loadingAgain, setLoadingAgain] = useState(0);

    useEffect(() => {
        fetch(`https://life-care-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization : `Bearer ${localStorage.getItem('lifeCare-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logOut();
                }
                return res.json()
            })
            .then(data => setreviews(data))
    }, [user?.email, loadingAgain, logOut])


    const handleDeleteReview = (_id) => {
        // console.log(_id);
        const proceed = window.confirm('Are you sure to delete your review?');
        if (proceed) {
            fetch(`https://life-care-server.vercel.app/myReviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successful');
                        const remaining = reviews.filter(rvw => rvw._id !== _id);
                        setreviews(remaining);
                    }
                })
        }
    };

    const handleUpdateReview = (event, _id) => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        console.log(reviewText);
        const updateReview = {
            updateReviewText : reviewText,
        }

        fetch(`https://life-care-server.vercel.app/myReviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body:  JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Successfully Updated')
                setLoadingAgain(loadingAgain + 1)
            }
        })
    }

    return (
        <div className='container mx-auto'>

            <Helmet>
                <title>Life Care My Reviews</title>
            </Helmet>

            <h2 className="text-3xl font-bold text-center mb-6">
                You have {reviews.length} reviews
            </h2>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                        handleUpdateReview={handleUpdateReview}
                    ></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;