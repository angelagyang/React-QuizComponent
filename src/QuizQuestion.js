import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {

    handleClick(buttonText) {
      if (buttonText===this.props.quiz_question.answer) {
        this.props.showNextQuestionHandler(); 
        this.setState({ incorrectAnswer: false}); 
      }  
      else {
        this.setState({incorrectAnswer: true});
      }
    }

    constructor(props){
      super(props);
      this.state = { incorrectAnswer: false };
    }

    render() {
        return (   
        <main>
          <section>
            <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
               {this.props.quiz_question.answer_options.map((answer_option, index) => {
                return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_option}/>
               })}
            </ul>
          </section>
          { this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null }
        </main>
      );
    }
  }

export default QuizQuestion