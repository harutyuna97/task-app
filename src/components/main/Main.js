import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { Link } from 'react-router-dom'




class Main extends Component {
    render() { 
        const { auth } = this.props
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
        return ( 
            <nav style={styles.nav}>
              <Link style={styles.logo} to='/'><h2>Our Logo</h2></Link>
              { page }
            </nav>
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