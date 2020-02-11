import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuiz } from '../../store/actions/quizActions';


class Quiz extends Component {
    state = { 
        question: '',
        answers: [
            {
                correct: false,
                content: '',
                image: '',
            },
            {
                correct: false,
                content: '',
                image: '',
            },
            {
                correct: false,
                content: '',
                image: '',
            },
        ]
    }

    addQuestion = (e) => {
        e.preventDefault();
        this.props.createQuiz(this.state);
        this.props.history.push('/');
    }

    questHandler = (e) => {
        this.setState({
            question: e.target.value,
        })
    }

    answerHandlerOne = (e) => {
        const answers = this.state.answers.concat()
        answers[0] = {
            ...this.state.answers[0],
            [e.target.id]: e.target.value,
            correct: e.target.checked ? true : false
        }

        this.setState({ answers })
    }
    answerHandlerTwo = (e) => {
        const answers = this.state.answers.concat()
        answers[1] = {
            ...this.state.answers[1],
            [e.target.id]: e.target.value,
            correct: e.target.checked ? true : false
        }
        this.setState({ answers })
    }
    answerHandlerThree = (e) => {
        const answers = this.state.answers.concat()
        answers[2] = {
            ...this.state.answers[2],
            [e.target.id]: e.target.value,
            correct: e.target.checked ? true : false
        }
        this.setState({ answers })
    }

    
    

    render() { 
        return ( 
            <div>
                <form onSubmit={this.addQuestion}>
                    <input onChange={this.questHandler} placeholder='Question'/>
                    <div>
                        <input id='content' onChange={this.answerHandlerOne} placeholder='Answer'/>
                        <input id='correct' onChange={this.answerHandlerOne} type='checkbox' name='answer'/>
                        <input id='image' onChange={this.answerHandlerOne} placeholder='URL of image'/>
                    </div>
                    <div>
                        <input id='content' onChange={this.answerHandlerTwo} placeholder='Answer'/>
                        <input id='correct' onChange={this.answerHandlerTwo} type='checkbox' name='answer'/>
                        <input id='image' onChange={this.answerHandlerTwo} placeholder='URL of image'/>
                    </div>
                    <div>
                        <input id='content' onChange={this.answerHandlerThree} placeholder='Answer'/>
                        <input id='correct' onChange={this.answerHandlerThree} type='checkbox' name='answer'/>
                        <input id='image' onChange={this.answerHandlerThree} placeholder='URL of image'/>
                    </div>
                    <button>Add Question</button>
                </form>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      createQuiz: (quiz) => dispatch(createQuiz(quiz))
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);