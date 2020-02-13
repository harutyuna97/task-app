import React, { useState } from 'react';
import QuizSummary from './QuizSummary';
import uuid from 'uuid/v1'

const QuizList = ({quizes}) => {

    const [num,setNum] = useState(0)
    const styles = {
        p: {
            width: '100%',
            maxWidth: '500px',
            margin: '100px auto',
            fontSize: '40px',
            color: '#FFC001'
        }
    }

    let checkAnswer = (answer) => {
        if (answer) {
            setNum(num + 1)
        } else {
            alert('Wrong answer, you need to start again quiz')
            setNum(0)
        }
    }


    if (quizes) {
        const quiz = quizes[num]
        return (
            <div>    
                <QuizSummary checkAnswer={checkAnswer} quiz={quiz} key={uuid()}/>
            </div>
        )
    } else {
        return (
            <p style = {styles.p}>No quizes</p>
        )
    }
    
}


export default QuizList