const initState = {
    err: null
  }
  
  const quizReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_QUIZ_SUCCESS':
            console.log(action.quiz);
            return state
        case 'CREATE_QUIZ_ERROR':
            console.log(action.err);
            return state
        case 'DELETE_SUCCESS':
            alert('Quiz deleted')
            return state
        case 'DELETE_ERROR':
            alert(state.err)
            return {
              ...state,
              err: action.err.message
            }
        default:
            return state
    }
  }
  
  export default quizReducer
