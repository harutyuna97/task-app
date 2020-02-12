import React from 'react';
import AnswersSummary from './AnswersSummary';
import uuid from 'uuid/v1'
import '../quiz/quiz.css'

const QuizSummary = ({quiz}) => {
    return (
        <div>
            <h2 className='question'> {quiz.question} </h2>
            <div>
                <AnswersSummary key={uuid()} answers={quiz.answers} />
            </div>    
        </div>
    )
}

export default QuizSummary