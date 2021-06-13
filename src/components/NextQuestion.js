import { useContext } from "react";
import { Context } from "../context/Context";

const NextQuestion = (props) => {

    const [state, setState] = useContext(Context);

    const hasAllQuestionCovered = () => {
        let { questions, questionsAnswered } = state;
        return questionsAnswered === questions.length - 1;
    }

    const handleClick = (e) => {
        let { questions, score, questionsAnswered,  alreadyAnswered } = state;
        if (questionsAnswered === questions.length - 1) return;
        setState({
            questionsAnswered: questionsAnswered + 1,
            questions: questions, score: score,
            alreadyAnswered: alreadyAnswered
        })
    }

    return <div className="text-lg-end">
        <button onClick={handleClick} disabled={hasAllQuestionCovered()}> Next </button>
    </div>
}

export default NextQuestion;