import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Authcontext } from '../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const {user} = useContext(Authcontext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const email = user?.email;
        const description = form.description.value;

        const service = {
            title : serviceName,
            email,
            price,
            img : photoURL,
            description,
            createDate : new Date()
        };
        fetch('http://localhost:5000/allServices', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data.acknowledged){
                alert(' New Service added successful');
                form.reset();
            }
        })
        .catch( err => console.error(err))
    }

    return (
        <div>
            <Helmet>
                <title>Life Care Add Service</title>
            </Helmet>
            
            <div className='lg:w-1/3 w-full mx-auto p-10 shadow-2xl rounded-xl my-10'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8'>
                    <h2 className='text-3xl font-semibold text-center'>Add Any Service </h2>
                    <input type="text"   name='serviceName' placeholder="Service Name" className="input input-bordered w-full " />
                    <input type="number"   name='price' placeholder="Price" className="input input-bordered w-full " />
                    <input type="text"  name='photoURL' placeholder=" Service Photo URL" className="input input-bordered w-full " />
                    <input type="email" defaultValue={user?.email} readOnly name='email'  placeholder="Email" className="input input-bordered w-full " />

                    <textarea name='description' className="textarea textarea-bordered" placeholder="Add Description"></textarea>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;