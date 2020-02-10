import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'




class Main extends Component {
    render() { 
        const { auth } = this.props
        const page = auth.uid ? <SignedIn /> : <SignedOut />
        return ( 
            <div>
                { page }
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
      auth: state.firebase.auth
    }
  }
 
export default connect(mapStateToProps)(Main);