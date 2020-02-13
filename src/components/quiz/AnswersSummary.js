import React from 'react';
import AnswerList from './AnswerList';
import uuid from 'uuid/v1'
import './quiz.css'

const AnswersSummary = ({answers, checkAnswer}) => {
    return (
        <div className='answerDiv'>
            {answers.map(answer => {
                return <AnswerList checkAnswer={checkAnswer} key={uuid()} answer={answer}/>
            })}
        </div>
    )
}
 
 
export default AnswersSummary;