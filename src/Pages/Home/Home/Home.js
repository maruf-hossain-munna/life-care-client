import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';
import TopHomeBanner from './TopHomeBanner';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='container mx-auto'>
            <TopHomeBanner></TopHomeBanner>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }
            </div>
            <div className='mx-auto flex justify-center'>
                <button className="btn btn-outline btn-primary px-12 ">See More</button>
            </div>
        </div>
    );
};

export default Home;