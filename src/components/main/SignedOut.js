import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignedOut extends Component {
    render() { 
        const styles = {
            div: {
                width: '700px',
                margin: '100px 500px',
               
            },
            login: {
                textDecoration: 'none',
                fontSize: '30px',
                padding: '20px',
                color: '#FDD200'
            },
            reg: {
                textDecoration: 'none',
                marginLeft: '200px',
                fontSize: '30px',
                padding: '20px',
                color: '#FDD200'
            }
        }
        return ( 
            <div style={styles.div}>
                <Link style={styles.login} to='/login'><i className="fas fa-sign-in-alt"></i> Login</Link>
                <Link style={styles.reg} to='/register'><i className="fas fa-pencil-alt"></i> Register</Link>
            </div>
         );
    }
}
 
export default SignedOut;