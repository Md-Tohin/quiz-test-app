
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container mt-32'>
            <div className="row">
                <div className="col-md-6">
                    <div className="logo">
                        <img src="images/img-404.png" className='h-72' alt="" />
                    </div>
                </div>
                <div className="col-md-6 pt-8">
                    <h4 className='text-xl font-bold'>Oops! We can't find the page you're looking for.</h4>
                    <div className="btn-groups my-3">
                        <Link className='mr-4 no-underline font-bold text-lg bg-orange-500 px-4 py-1 rounded-xl text-white border-2 border-orange-500' to='/'><i className="fa-solid fa-arrow-left pr-3"></i>Back</Link>
                        <Link className='no-underline font-bold text-lg  px-4 py-1 rounded-xl text-orange-500 border-2 border-orange-500 hover:text-white hover:bg-orange-500 hover:underline hover:underline-offset-4 duration-500' to='/'>Go to homepage</Link>
                    </div>
                    <div className="mt-4 text-base">
                        <p className='mb-0'>Here are some useful links:</p>
                        <ul className='list-disc'>
                            <li>Explore selected products in <Link to='/'>All categories</Link></li>
                            <li>Visit the <Link to='/'>Help Center</Link></li>
                        </ul>
                        <p className='mt-7'>We've also compiled some products you might like below</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;