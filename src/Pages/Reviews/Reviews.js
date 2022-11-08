import React, { useContext } from 'react';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const {user} = useContext(Authcontext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.name || form.name.value;
        const photoURL = form.photoURL.value;
        const email = user?.email;
        const review = form.review.value;
        console.log(name, photoURL, email, review);
    }
    return (
        <div>
            <h2 className="text-4xl">
                give us your special comment or review
            </h2>

            <div className='w-1/3 mx-auto p-10 shadow-2xl rounded-xl my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8'>
                    <h2 className='text-3xl font-semibold text-center'>Your Reviews</h2>
                    <input type="text" defaultValue={user?.name}  name='name' placeholder="Name" className="input input-bordered w-full " />
                    <input type="text"  name='photoURL' placeholder="Photo URL" className="input input-bordered w-full " />
                    <input type="email" defaultValue={user?.email} readOnly name='email'  placeholder="Email" className="input input-bordered w-full " />

                    <textarea name='review' className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;