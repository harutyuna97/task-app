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
            color: '#FFA711',
            width: '200px',
            marginTop: '20px',
            textAlign: 'center',
            border: '2px solid #FFA711'
          },
          nav: {
              display: 'flex',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto', 
              padding: '20px',
          },  
          dash: {
            textDecoration: 'none',
            margin: '20px 0 0 30px',
            color: '#000'
          },
          prof: {
            textDecoration: 'none',
            margin: '20px 0 0 40px',
            color: '#000'
          }
        }

        let link = ''

        if (profile.role === 'admin') {
           link = '/admin'
        } else if (profile.role === 'user') {
            link = '/user'
        } else {
            link = '/login'
        }
        
        return ( 
            <nav style={styles.nav}>
              <Link style={styles.logo} to='/'><h2>Our Logo</h2></Link>
              <Link style={styles.dash} to='/dashboard'><h2>Quiz</h2></Link>
              <Link style={styles.prof} to={link}><h2>User Profile</h2></Link>
              { page }
            </nav>
         );
    }
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
 
export default connect(mapStateToProps)(Main);