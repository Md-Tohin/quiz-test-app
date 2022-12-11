import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleTopic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    // console.log(name);
    return (
        <div className="col">
            <div className="card h-100">
                <img src={logo} className="card-img-top bg-slate-400" alt="" />
                <div className="p-2 flex justify-between items-center">
                    <p className="font-bold pt-3 text-gray-700">{name} <span className='font-light text-sm text-black'>({total})</span></p>
                    <Link to={`/quiz/${id}`} className="flex font-semibold text-white bg-blue-600 px-2 py-1 rounded-md no-underline ">Start Practice    <ArrowRightIcon className="h-6 w-6 text-white font-bold pl-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTopic;