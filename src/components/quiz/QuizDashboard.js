import React, { Component } from 'react';
import QuizList from './QuizList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class QuizDashboard extends Component {
    render() { 
        const { quizes,profile } = this.props
        if (!profile.firstName) {
            return <Redirect to='/login'/>
        }
        return ( 
            <div>
                <QuizList quizes={quizes}/>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        quizes: state.firestore.ordered.Quizs,
        profile: state.firebase.profile
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Quizs' }
    ])
)(QuizDashboard);