import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import HomeServiceCard from '../Home/Home/HomeServiceCard';

const Services = () => {
    const allServices = useLoaderData();
    console.log(allServices);
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Life Care Services</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    allServices.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;