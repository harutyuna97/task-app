import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions';


class User extends Component {
    render() { 
        const { profile } = this.props
        if (!profile.firstName) {
            return <Redirect to='/'/>
        }
        return ( 
            <div>
                <div className='profileCardAdmin'>
                    <h2 className='userInfo'>Profile information</h2>
                    <p>Name: {profile.firstName}</p>
                    <p>Last Name: {profile.lastName}</p> <br/>
                    <button className='signOutBtn' onClick={this.props.signOut}><i className="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(User);