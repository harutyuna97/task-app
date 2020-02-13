import React from 'react';
import './quiz.css'

const AnswerList = (props) => {
    const answer = props.answer
    const checkAnswer = props.checkAnswer.bind(this, answer.correct)
    return ( 
        <div className='listDiv'>
            <img onClick={checkAnswer} className='answerImg' src={answer.image} alt='answerImage' />
            <h3> {answer.content} </h3>
        </div>
     );
}


 
export default AnswerList;