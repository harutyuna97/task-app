const initState = {
    authError: null,
    forgotError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){

      case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
      
      
      case 'SIGNUP_SUCCESS':

        return {
          ...state,
          authError: null
        }
  
      case 'SIGNUP_ERROR':
        return {
          ...state,
          authError: action.err.message
        }

      case 'SIGNOUT_SUCCESS':
        return state;
        
      case 'FORGOT_PASSWORD':
        alert('Email sent')
        return state
      case 'FORGOT_ERROR':
        return {
          ...state,
          forgotError: action.err.message
        }
      default:
        return state
    }
  };
  
  export default authReducer;