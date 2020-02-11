import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { quizReducer } from './quizReducer'

const rootReducer = combineReducers({
  quiz: quizReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

