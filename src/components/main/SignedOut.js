import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignedOut extends Component {
    render() { 
        const styles = {
            nav: {
                display: 'flex',
                width: '100%',
                maxWidth: '200px',
                margin: '20px 0px 0 500px',
                textAlign: 'center'
            },
            login: {
                height: '50px',
                width: '80px',
                margin: '20px 0 0 10px',
                textDecoration: 'none',
                fontSize: '17px',
                color: '#FDD200',
            },
            reg: {
                height: '50px',
                width: '100px',
                textDecoration: 'none',
                fontSize: '17px',
                color: '#FDD200',
                backgroundColor: '#7CC300',
                
                marginTop: '20px',
            },
            text: {
                margin: '10px 0 0 0px',
                height: '10px'
            },
        }
        return ( 
            <nav style={styles.nav}>
                <Link style={styles.reg} to='/register'><p style={styles.text}><i className="fas fa-pencil-alt"></i> Join Us</p></Link>
                <Link style={styles.login} to='/login'><p style={styles.text}><i className="fas fa-sign-in-alt"></i> Login</p></Link>
            </nav>
         );
    }
}
 
export default SignedOut;