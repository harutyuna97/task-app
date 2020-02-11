import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';
import { Redirect, Link } from 'react-router-dom'

class Admin extends Component {
    render() { 
        const { profile } = this.props
        if (profile.role !== 'admin') {
            return <Redirect to = '/' />
        }
        return ( 
            <div>
                <div className='profileCardAdmin'>
                    <h2 className='userInfo'>Profile information(Admin)</h2>
                    <p>Name: {profile.firstName}</p>
                    <p>Last Name: {profile.lastName}</p>
                    <Link to='/admin/quiz'>Add Quiz</Link> <br />
                    <button className='signOutBtnAdmin' onClick={this.props.signOut}><i className="fas fa-sign-out-alt"></i></button>
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
 
export default connect(mapStateToProps,mapDispatchToProps)(Admin);