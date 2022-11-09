import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import BottomBanner from './BottomBanner';
import HomeServiceCard from './HomeServiceCard';
import TopHomeBanner from './TopHomeBanner';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Life Care Home</title>
            </Helmet>

            <TopHomeBanner></TopHomeBanner>

            <h2 className="text-4xl font-bold text-orange-600 mb-6 ">
                Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                {
                    services.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }
            </div>
            <div className='mx-auto flex justify-center'>
                <Link to='/services'>
                    <button className="btn btn-outline btn-primary px-12 ">See More</button>
                </Link>
            </div>

            <BottomBanner></BottomBanner>
        </div>
    );
};

export default Home;