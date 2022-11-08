import React from 'react';

const MyReviewCard = ({ review }) => {
    const { reviewProName, photoURL, reviewText, reviewerName } = review;
    return (
        <div>
            {/* <h2>{reviewProName}</h2> */}
            <div className='p-8 shadow-xl rounded-xl'>

                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full mr-2' src={photoURL} alt="" />
                    <h4 className="text-xl font-semibold">
                        {reviewerName}
                    </h4>
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