import React, { useContext } from 'react';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const Reviews = ({service}) => {
    // console.log(service);
    const { img, description, title, _id, price } = service;
    const {user} = useContext(Authcontext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.name || form.name.value;
        const photoURL = form.photoURL.value;
        const email = user?.email  || form.email.value;
const reviewText = form.reviewText.value;

        const review = {
            reviewId : _id,
            reviewProName: title,
            reviewerName: name,
            email,
            photoURL,
            reviewText,

        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert(' Review successful');
                form.reset();
            }
        })
        .catch( err => console.error(err))
    }
    return (
        <div className='mt-20'>
            <h2 className="text-4xl font-bold text-orange-600 text-center">
                Please Review this Service
            </h2>

            <div className='lg:w-1/3 w-full mx-auto p-10 shadow-2xl rounded-xl my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8'>
                    <h2 className='text-3xl font-semibold text-center'>Your Reviews</h2>
                    <input type="text" defaultValue={user?.name}  name='name' placeholder="Name" className="input input-bordered w-full " />
                    <input type="text"  name='photoURL' placeholder="Photo URL" className="input input-bordered w-full " />
                    <input type="email" defaultValue={user?.email} readOnly name='email'  placeholder="Email" className="input input-bordered w-full " />

                    <textarea name='reviewText' className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;