const initState = {
    quizes: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'},
    ]
  }
  
  const quizReducer = (state = initState, action) => {
    if (action.type === 'CREATE_QUIZ_SUCCESS') {
        console.log(action.project)
        return state
    } else if (action.type === 'CREATE_QUIZ_ERROR') {
        console.log(action.err)
        return state
    }
    return state
  }
  
  export default quizReducer