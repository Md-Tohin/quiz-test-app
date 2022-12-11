import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleOption = ({ option, id, correctAnswer }) => {
    // console.log(correctAnswer);
    const checkAnswer = (givenAnswer) => {
        // const giveAnswer = this.value;
        // console.log(givenAnswer);
        if(givenAnswer === correctAnswer){
            // console.log('Correct');
            return toast('Yes, Correct');
        }else{
            // console.log('UnCorrect');
            return toast('Oops! UnCorrect');
        }
    }
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <div className="flex">
                        <input className="" type="radio" name={`${id}`} onClick={()=>checkAnswer(option)} />
                        <label className="pl-3 font-semibold text-sm" >
                            {option}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOption;