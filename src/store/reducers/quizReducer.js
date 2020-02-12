const initState = {
    
  }
  
  const quizReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_QUIZ_SUCCESS':
            console.log(action.quiz);
            return state
        case 'CREATE_QUIZ_ERROR':
            console.log(action.err);
            return state

        default:
            return state
    }
  }
  
  export default quizReducer
