import React, {useContext} from 'react';
import { Context } from "../context/Context";

const Question = (props) => {
   const [state, setState] = useContext(Context);
   if (state.questions.length === 0) return <div></div>;

    const options = [];
    const questionIndex = state.questionsAnswered;
    const questionAsked = state.questions[questionIndex];
    let question = questionAsked.question;

    const selectUserChange = (event) => {
        let optionSelected = event.target.value;
        let initialScore = state.score;
        let correct = 0;

        // fetch selected option and change the color as per correct answer
        let element = document.getElementById(question + "-" + optionSelected);
        element.style.color = "red";

        // is user selected correct option or user re-selected correct option
        // to avoid counting again
        if (questionAsked.correct === questionAsked.options[optionSelected]) {
            let isQuestionAlreadyAnswered = state.alreadyAnswered.indexOf(questionIndex) !== -1;
            if (!isQuestionAlreadyAnswered) {
                correct = 1;
            }
            element.style.color = "green";
        }

        setState({  score: initialScore + correct,
                    questions: state.questions,
                    questionsAnswered: state.questionsAnswered,
                    alreadyAnswered: [...state.alreadyAnswered, questionIndex]
                });
    };

    questionAsked.options.forEach((option, index) =>
        options.push(<div key={question + "-" + index} className="form-check" id={question + "-" + index}>
            <input className="form-check-input" type="radio" value={index} onChange={selectUserChange}
                   name="flexRadioDefault" id={question + "-" + index} />
            <label className="form-check-label" htmlFor="{index}">
                {option}
            </label>
        </div>)
    );

    return (<div>
        <span>
            { questionAsked.question }
        </span>
        <div className="mt-2">
            { options }
        </div>
    </div>);

}

export default Question;