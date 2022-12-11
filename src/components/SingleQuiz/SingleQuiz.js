import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import SingleOption from '../SingleOption/SingleOption';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ singleQuiz, index }) => {
    const { question, options, id, correctAnswer } = singleQuiz;
    const correctAns = (answer) => toast(answer);
    // const correctAns = () => toast('Wow Answer here');
    // console.log(index);
    // console.log(correctAnswer);
    return (
        <div className='w-3/5 mx-auto shadow-md p-3 mb-4'>
            <div className="flex justify-between items-center ">
                <p className='text-md font-bold text-gray-700 text-center w-4/5 mx-auto'>Quiz {index+1}: {question}</p>
                <p>
                    <button onClick={() => correctAns(correctAnswer)}><EyeIcon className='h-6 w-6 ml-4 text-gray-700' /></button>
                    <ToastContainer />

                </p>
            </div>
            <div className="mt-2">
                <div className="row row-cols-1 row-cols-lg-2 g-4">
                    {
                        options.map((option, idx) => <SingleOption key={idx} id={id} option={option} correctAnswer={correctAnswer}></SingleOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;