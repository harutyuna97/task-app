import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect, Link } from 'react-router-dom'

class LogComponent extends Component {
    state = {
      email: '',
      password: ''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state)
    }
    render() {
      const { auth, authError } = this.props;
      if (auth.uid) {
        return <Redirect to='/' />
      }
      return (
        <div className="logInfo">
          <form className="form2" onSubmit={this.handleSubmit}>
            <h5 className="title">Sign In</h5>
            <div className="input-field">
              <input className='mailPassInput' placeholder='&nbsp; Email' type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <input className='mailPassInput' placeholder='&nbsp; Password' type="password" id='password' onChange={this.handleChange} /> 
              <Link className='forgotLink' to = '/forgotpassword'>Forgot password?</Link>  
            </div>
            <div className="input-field">
              <button className="log-btn">Login</button> <br/>
              <Link className='regLink' to='/register'>Dont have an account? Create one here!</Link>
              <div style={{color: 'red'}}>
                { authError ? <p>{authError}</p> : null }
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(LogComponent)