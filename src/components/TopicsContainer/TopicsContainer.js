import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from '../SingleTopic/SingleTopic';

const TopicsContainer = () => {
    const topics = useLoaderData();    
    return (
        <div className='container mt-28'>
            <div className="row mb-8 relative">
                <img src="../../images/header.png" className='h-28' alt="" />
                <p className='absolute text-gray-800 text-lg font-semibold text-center overflow-hidden'>Quiz app is for useful application for students, they can attempt tests using quiz app. also with some feature they can study topics upload from admin in current affairs and news section.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ">
                {
                    (topics.data).map((topic, idx)=> <SingleTopic key={idx} topic={topic}></SingleTopic>)
                }
            </div>
        </div>
    );
};

export default TopicsContainer;