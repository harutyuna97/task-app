import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'


class Signedin extends Component {
    render() { 
        const { profile } = this.props
        console.log(profile)
        if (profile.role === 'admin') {
            return <Redirect to ='/admin'/>
        }
        return ( 
            <div>
                <button className='signOutBtn' onClick={this.props.signOut}><i className="fas fa-sign-out-alt"></i></button>
                <div className='profileCard'>
                    <h2 className='userInfo'>Profile information</h2>
                    <p>Name: {profile.firstName}</p>
                    <p>Last Name: {profile.lastName}</p>
                </div>
            </div>
         );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Signedin);