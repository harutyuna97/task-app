import React from 'react';
import AnswersSummary from './AnswersSummary';
import uuid from 'uuid/v1'
import '../quiz/quiz.css'
import { connect } from 'react-redux'
import { handleDelete } from '../../store/actions/quizActions';

const QuizSummary = ({quiz, checkAnswer, profile, handleDelete}) => {
    const styles = {
        h3: {
            width: '100%',
            maxWidth: '500px',
            margin: '100px auto',
            fontSize: '40px',
            color: '#FFC001',
        }
    }


    let del = null

    if (profile.role === 'admin') {
        del = (
            <div className = 'delDiv'>
                <button className='quizDelBtn' onClick={handleDelete.bind(this, quiz.id)}>Delete</button>
            </div>
        )
    }


    if (quiz) {
        return (
            <div>
                <h2 className='question'> {quiz.question} </h2>
                { del }
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

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: id => dispatch(handleDelete(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuizSummary)