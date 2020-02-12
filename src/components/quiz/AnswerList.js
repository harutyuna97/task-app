import React, { useState } from 'react';
import './quiz.css'

const AnswerList = ({answer}) => {
    
const[check,setCheck] = useState('answerImg')

    let checkAnswer = () => {
        if (answer.correct) {
            setCheck('trueAnswer')
        } else {
            setCheck('falseAnswer')
        }
    }
    return ( 
        <div className='listDiv'>
            <img onClick={checkAnswer} className={check} src={answer.image} alt='answerImage' />
            <h3> {answer.content} </h3>
        </div>
     );
}
 
export default AnswerList;