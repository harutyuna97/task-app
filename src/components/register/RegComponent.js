import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      role: '',
    })
  }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) {
      return <Redirect to='/' />
    }
    return (
      <div className="logInfo">
        <form className="form1" onSubmit={this.handleSubmit}>
          <h3 className="title">Sign Up</h3>
          <div className="input-field">
            <input className='mailPassInput' placeholder='Email' value={this.state.email} type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input className='mailPassInput' placeholder='Password' value={this.state.password} type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input className='mailPassInput' placeholder='First Name' value={this.state.firstName} type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <input className='mailPassInput' placeholder='Last Name' value={this.state.lastName} type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="role" id='role'>Role: </label>
            <input name='role' type="radio" value='admin' id='role' onChange={this.handleChange}/> -admin
            <input name='role' type="radio" value='user' id='role' onChange={this.handleChange}/> -user
          </div>
          <div className="input-field">
            <button className="reg-btn">Sign Up</button>
          </div>
          <div className="center red-text">
                { authError ? <p>{authError}</p> : null }
              </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
