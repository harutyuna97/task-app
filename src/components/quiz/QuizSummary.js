import React from 'react';
import AnswersSummary from './AnswersSummary';
import uuid from 'uuid/v1'
import '../quiz/quiz.css'

const QuizSummary = ({quiz, checkAnswer}) => {
    const styles = {
        h3: {
            width: '100%',
            maxWidth: '500px',
            margin: '100px auto',
            fontSize: '40px',
            color: '#FFC001',
        }
    }
    if (quiz) {
        return (
            <div>
                <h2 className='question'> {quiz.question} </h2>
                <div>
                    <AnswersSummary checkAnswer={checkAnswer} key={uuid()} answers={quiz.answers} />
                </div>    
            </div>
        )
    } else {
        return (
            <h3 style={styles.h3}>Congrats!!! You passed quiz</h3>
        )
    }
}

export default QuizSummary