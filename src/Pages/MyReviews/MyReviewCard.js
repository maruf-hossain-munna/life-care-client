import React, { useContext } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviewCard = ({ review, handleDeleteReview, handleUpdateReview }) => {
    const { reviewProName, photoURL, reviewText, reviewerName, _id } = review;

    return (
        <div>
            <div className='p-8 shadow-xl rounded-xl'>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full mr-2' src={photoURL} alt="" />
                        <h4 className="text-xl font-semibold">
                            {reviewerName}
                        </h4>
                    </div>

                    <div className='flex'>
                        <label htmlFor="my-modal" className="btn btn-ghost"> <FaEdit></FaEdit> </label>
                        {/* <button className='btn-ghost px-4 py-2 rounded-lg'> <FaEdit></FaEdit>  </button> */}
                        <button onClick={() => handleDeleteReview(_id)} className='btn-ghost px-4 py-2 rounded-lg'> <FaTrashAlt /> </button>
                    </div>
                </div>
                <p className='text-lg font-semibold'> <span className=' text-orange-600 '> Service Name:  </span>
                    {reviewProName} </p>

                <p> <span className='text-lg text-orange-600 font-semibold'> Review: </span>
                    {reviewText}  </p>

            </div>

            {/* The button to open modal */}
            {/* <label htmlFor="my-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={(event)=> handleUpdateReview (event, _id)} >
                        <h2 className="text-2xl font-bold my-4 text-center"> Please Update Your Review </h2>
                        <textarea name='reviewText' className="textarea textarea-bordered w-full" required placeholder="Your Review"></textarea>

                        <input type="submit" value="Update" className='btn' />

                    </form>


                </div>
            </div>
        </div>
      
    );
};

export default MyReviewCard;