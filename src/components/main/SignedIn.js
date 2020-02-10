import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';


class Signedin extends Component {
    render() { 
        const { profile } = this.props
        console.log(profile)
        const styles={
            div: {
                width: '400px',
                margin: '0 auto'
            }
        }
        return ( 
            <div style={styles.div}>
                <h2>Profile information</h2>
                <p>Name: {profile.firstName}</p>
                <p>Last Name: {profile.lastName}</p>
                <button onClick={this.props.signOut}>Sign Out</button>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Signedin);