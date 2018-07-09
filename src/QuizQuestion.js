import React, { Component } from 'react'; 

class QuizQuestion extends Component {

    render() {
        return    
        <main>
        <section>
          <p>{this.props.quiz_question.instruction_text} </p>
        </section>
        <section className="buttons">
          <ul>
          <li>{this.props.quiz_question.answer_options[0]}</li>
            //quiz question button logic goes here
          </ul>
        </section>
      </main>;
    }
}

export default QuizQuestion