import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';


const Reviews = ({ service, setLoadingAgain, loadingAgain }) => {
    // console.log(service);
    const { img, description, title, _id, price } = service;
    const { user } = useContext(Authcontext);
    

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;


        const review = {
            serviceId: _id,
            reviewProName: title,
            reviewerName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
            reviewText,
            createDate: new Date()

        };
        console.log(_id);
        fetch(`https://life-care-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert(' Review added successful');
                    setLoadingAgain(loadingAgain + 1)
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='mt-20'>
            <h2 className="divider text-4xl uppercase font-light text-orange-600 text-center">
                Write your review
            </h2>
           

            <div className={`lg:w-1/3 w-full mx-auto p-10 ${user?.uid && 'shadow-2xl'} rounded-xl my-10`}>
                <div>
                    {
                        !user?.email &&

                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold my-4'> Please Sign in to add a review </h2>
                            <Link to='/signin'> <button className='btn btn-outline btn-primary px-12 '> Sign In</button> </Link>
                        </div>
                    }
                </div>
                {
                    user?.email &&
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8'>
                        <h2 className='text-3xl font-semibold text-center'>Your Reviews</h2>
                        <input type="text" defaultValue={user?.displayName} name='name' placeholder="Name" className="input input-bordered w-full " required />

                        <input type="email" defaultValue={user?.email} readOnly name='email' required placeholder="Email" className="input input-bordered w-full " />

                        <textarea name='reviewText' className="textarea textarea-bordered" required placeholder="Your Review"></textarea>
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                }
            </div>

        </div>
    );
};

export default Reviews;