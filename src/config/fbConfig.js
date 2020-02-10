import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDQWMwwBziqEW0zdi1Sh0TdsYYRj3E3IEg",
    authDomain: "task-app-71318.firebaseapp.com",
    databaseURL: "https://task-app-71318.firebaseio.com",
    projectId: "task-app-71318",
    storageBucket: "task-app-71318.appspot.com",
    messagingSenderId: "363460457068",
    appId: "1:363460457068:web:5f96908cbaf973c3bdde49",
    measurementId: "G-X4KX5T5EB3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase