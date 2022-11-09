import React, { useContext } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviewCard = ({ review, handleDeleteReview }) => {
    const { reviewProName, photoURL, reviewText, reviewerName, _id } = review;
    const {loading} = useContext(Authcontext);


    return (
        <div>
            {/* <h2>{reviewProName}</h2> */}
            <div className='p-8 shadow-xl rounded-xl'>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full mr-2' src={photoURL} alt="" />
                        <h4 className="text-xl font-semibold">
                            {reviewerName}
                        </h4>
                    </div>

                    <div className='flex'>
                        <button className='btn-ghost px-4 py-2 rounded-lg'> <FaEdit></FaEdit>  </button>
                        <button onClick={() => handleDeleteReview(_id)} className='btn-ghost px-4 py-2 rounded-lg'> <FaTrashAlt /> </button>
                    </div>
                </div>
                <p className='text-lg font-semibold'> <span className=' text-orange-600 '> Service Name:  </span>
                    {reviewProName} </p>

                <p> <span className='text-lg text-orange-600 font-semibold'> Review: </span>
                    {reviewText}  </p>

            </div>
        </div>
    );
};

export default MyReviewCard;