import React from 'react';
import AnswerList from './AnswerList';
import uuid from 'uuid/v1'
import './quiz.css'

const AnswersSummary = ({answers}) => {
    return (
        <div>
            {answers.map(answer => {
                return <AnswerList key={uuid()} answer={answer}/>
            })}
        </div>
    )
}
 
 
export default AnswersSummary;