import React from 'react';
import QuizSummary from './QuizSummary';
import uuid from 'uuid/v1'


const QuizList = ({quizes}) => {
    return (
        <div>
            {quizes && quizes.map(quiz => {
                return (
                    <QuizSummary quiz={quiz} key={uuid()}/>
                )
            })}
        </div>
    )
}

export default QuizList