import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { Link } from 'react-router-dom'




class Main extends Component {
    render() { 
        const { auth, profile } = this.props
        const page = auth.uid ? <SignedIn /> : <SignedOut />
        const styles = {
          logo: {
            textDecoration: 'none',
            color: '#000',
            width: '200px',
            marginTop: '20px'
          },
          nav: {
              display: 'flex',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto', 
              padding: '20px',
          },  
        }

        const link = profile.role === 'admin' ? '/admin' : '/'
        return ( 
            <nav style={styles.nav}>
              <Link style={styles.logo} to={link}><h2>Our Logo</h2></Link>
              { page }
            </nav>
         );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
 
export default connect(mapStateToProps)(Main);