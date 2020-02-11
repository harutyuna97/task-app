import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'




class QuizDashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            
          </div>
          <div className="col s12 m5 offset-m1">
        
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt','desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(QuizDashboard)
