import React, { Component } from 'react';
import QuizList from './QuizList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class QuizDashboard extends Component {
    render() { 
        const { quizes } = this.props
        return ( 
            <div>
                <QuizList quizes={quizes}/>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.Quizs)
    return {
        quizes: state.firestore.ordered.Quizs
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Quizs' }
    ])
)(QuizDashboard);