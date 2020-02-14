import React, { Component } from 'react';
import { connect } from 'react-redux'
import { forgot } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'

class ForgotPassword extends Component {

    state = {
        email: ''
    }
    enterEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.forgot(this.state.email)
    }

    render() { 
        if (this.props.profile.firstName) {
            return <Redirect to = '/' />
        } 
        return ( 
            <div>
                <form className = 'forgotForm' onSubmit={this.submitHandler}>
                    <p className = 'forgotText'>First, let's find your account. Please enter your email</p>
                    <input className = 'forgotInput' onChange={this.enterEmail} type = 'text' placeholder = 'Enter your email'/>
                    <button className = 'forgotBtn'>Reset password</button>
                    <p className = 'forgotP'>{this.props.forgotErr}</p>
                </form>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        forgotErr: state.auth.forgotError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forgot: (email) => dispatch(forgot(email))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ForgotPassword);