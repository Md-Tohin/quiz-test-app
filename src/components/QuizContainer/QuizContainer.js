import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizContainer = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data);
    const { name, questions } = quiz.data;
    return (
        <div className='container mt-28'>
            <p className='font-bold text-2xl text-gray-600 text-center'>Quiz of {name}</p>
            {
                questions.map((singleQuiz, idx) => <SingleQuiz key={idx} index={idx} singleQuiz={singleQuiz}></SingleQuiz>)
            }
        </div>
    );
};

export default QuizContainer;