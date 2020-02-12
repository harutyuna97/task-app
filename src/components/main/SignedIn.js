import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Signedin extends Component {
    render() { 
        const { profile } = this.props
        if (profile.role === 'admin') {
            return <Redirect to ='/admin'/>
        }
        return ( 
            <div className='userDiv'>
                <span className='profName'>{profile.firstName}</span>
            </div>
         );
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
 
export default connect(mapStateToProps)(Signedin);