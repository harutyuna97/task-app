export const createQuiz = (quiz) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('Quizs').add({
        ...quiz,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_QUIZ_SUCCESS', quiz });
        console.log(profile)
      }).catch(err => {
        dispatch({ type: 'CREATE_QUIZ_ERROR' }, err);
      });
    }
  };

  export const handleDelete = id => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore()
      firestore.collection('Quizs').doc(id).delete().then(() => {
        dispatch({type: 'DELETE_SUCCESS'})
      }).catch((err) => {
        dispatch({type: 'DELETE_ERROR', err})
      })
    }
  }