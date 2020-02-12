import React from 'react';
import './quiz.css'

const AnswerList = ({answer}) => {
    return ( 
        <div>
            <img className='answerImg' src={answer.image} />
            <h3> {answer.content} </h3>
            <input type='checkbox'/>
        </div>
     );
}
 
export default AnswerList;